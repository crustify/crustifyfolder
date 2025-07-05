const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(error => {
      // Silently handle web-vitals import errors in production
      console.warn('Web Vitals could not be loaded:', error);
    });
  }
};

// Send to analytics in production
const sendToAnalytics = ({ name, delta, value, id }) => {
  // You can send metrics to Google Analytics, or any other analytics service
  // Example: gtag('event', name, { value: Math.round(name === 'CLS' ? delta * 1000 : delta) });
  
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', { name, delta, value, id });
  }
};

export default reportWebVitals;
export { sendToAnalytics };
