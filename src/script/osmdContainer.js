class OsmdContainer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
            <div id="score_${this.getAttribute('file')}" style="background: white"/>
        `;
  }
  async connectedCallback() {
    await import('/script/opensheetmusicdisplay.min.js')
    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(`score_${this.getAttribute('file')}`);
    osmd.setOptions({
      backend: "svg",
      drawTitle: true,
      // drawingParameters: "compacttight" // don't display title, composer etc., smaller margins
    });
    osmd
      .load(`/xml/${this.getAttribute('file')}.xml`)
      .then(
        function () {
          osmd.render();
        },
      );
  }
}

customElements.define("osmd-container", OsmdContainer);
