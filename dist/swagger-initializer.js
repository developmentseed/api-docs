window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  let params = new URL(document.location).searchParams;
  let url = params.get("url");

  window.ui = SwaggerUIBundle({
    url: url || "swagger.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
