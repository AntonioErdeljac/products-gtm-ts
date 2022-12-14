import mixpanel from 'mixpanel-browser';

class Conversions {
  adsModule: any;

  utmModule: any;

  constructor() {
    this.adsModule = window.gtag; // Replace with Ads
    this.utmModule = mixpanel;
  }

  init() {
    console.log('UTM Tracking Initialized');
    this.utmModule.init('d8fb925e4ff99320588cc91dcea88a10', { debug: true });
  }

  onProductSelection(id: string, email: string) {
    console.log('Product ID conversion');
    this.adsModule('event', 'product_selection', { productId: id, email });
  }
}

export default new Conversions();
