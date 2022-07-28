import mixpanel from 'mixpanel-browser';

class Conversions {
  eventModule: any;

  utmModule: any;

  constructor() {
    this.eventModule = window.gtag;
    this.utmModule = mixpanel;
  }

  init() {
    console.log('UTM Tracking Initialized');
    this.utmModule.init('d8fb925e4ff99320588cc91dcea88a10', { debug: true });
  }

  onProductSelection(id: string) {
    console.log('Product ID conversion');
    this.eventModule('event', 'product_selection', { productId: id });
  }
}

export default new Conversions();
