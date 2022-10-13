export default `
  <div class="modal-backdrop">
    <div class="modal-content">
      <div class="modal-content__header">
        <span class="modal-content__title">{{title}}</span>
      </div>
      <div class='modal-content__body'>
        {{>body}}
      </div>
      <div class='modal-content__footer'>
      </div>
    </div>
  </div>
`;
