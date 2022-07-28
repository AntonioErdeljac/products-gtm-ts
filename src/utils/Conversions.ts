class Conversions {
  eventModule: any;

  constructor() {
    this.eventModule = window.gtag;
  }

  onProductSelection(id: string) {
    console.log('Product ID conversion');
    this.eventModule('event', 'conversion', { productId: id });
  }
}

export default Conversions;
