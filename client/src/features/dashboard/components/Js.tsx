import React from 'react';
import useImportScript from '../../../app/utils/hooks/importScript';
// import ScriptTag from 'react-script-tag';

const Js = () => {
  const javascript = [
    "dashboard-assets/vendor/global/global.min.js",
    "dashboard-assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js",
    "dashboard-assets/vendor/chart.js/Chart.bundle.min.js",
    "dashboard-assetsvendor/peity/jquery.peity.min.js",
    "dashboard-assets/vendor/apexchart/apexchart.js",
    "dashboard-assets/js/dashboard/dashboard-1.js",
    "dashboard-assets/vendor/owl-carousel/owl.carousel.js",
  ]	
  return (
    <>
      {
    // useImportScript(javascript)
   
    }
    </>
  )
}

export default React.memo(Js)
