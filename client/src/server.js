import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";
import { createStore } from "./utils/redux";
import { getMiddlewares, getReducers, getEnhancers } from "./config/redux";
import { getInitialState } from "./config/state";
import ServerRoot from "./ServerRoot";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { getPersons } from "./ducks/person";
import template from "./config/template";
import { ServerStyleSheet } from "styled-components";
import transit from "transit-immutable-js";

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";

const respond = stats => {
  const chunks = ["meta", "vendor", "client"];
  const scripts = getScripts(stats, chunks);
  const styles = getStyles(stats, chunks);

  return async (req, res, next) => {
    const initialState = getInitialState();
    const store = createStore(
      getReducers(),
      getMiddlewares(),
      getEnhancers(),
      initialState
    );

    await store.dispatch(getPersons());

    const context = {};

    const sheet = new ServerStyleSheet();

    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <ServerRoot context={context} store={store} location={req.path} />
      )
    );

    const { js: cjs, styles: cstyles } = flushChunks(stats, {
      chunkNames: flushChunkNames()
    });

    console.log(cjs, cstyles, "tussilärvi");

    const tpl = template(
      html,
      cjs,
      cstyles,
      sheet.getStyleTags(),
      transit.toJSON(store.getState())
    );
    res.send(tpl);
  };
};

export default respond;
