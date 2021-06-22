class MidiContainer extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <midi-player 
        src="/midi/${this.getAttribute('file')}.mid" 
        sound-font 
        visualizer="#${this.getAttribute('file')}" 
        id="#${this.getAttribute('file')}">
      </midi-player>
          `;
    }
    async connectedCallback() {
      await import('https://cdn.jsdelivr.net/combine/npm/tone@latest,npm/@magenta/music@latest/es6/core.js,npm/focus-visible@latest,npm/html-midi-player@latest')
      
      const playerId=this.getAttribute('file')
      const player=document.getElementById(`#${playerId}`)
      const visualizerType=this.getAttribute('type')
      if (visualizerType){
        console.log("Here")
        const visualizer=document.createElement('midi-visualizer')
        visualizer.setAttribute('type',visualizerType)
        visualizer.setAttribute('id',playerId)
        player.insertAdjacentElement('afterend',visualizer)
        player.addVisualizer(document.getElementById(playerId));
      }
    }

}
  
customElements.define("midi-container", MidiContainer);
  