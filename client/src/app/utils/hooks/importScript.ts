import React, { useEffect } from 'react';

const useImportScript = (resourceUrl:string[])=> {
  useEffect(
    () => {
      let script:HTMLScriptElement;
    resourceUrl.map(url=>{
    script = document.createElement('script');
    script.src = url;
    script.type='text/javascript';
    script.async = false;
    script.defer = false;
    // script.type = 'module';

  script.onload = () => {
  // console.log(`The script '${url}'has loaded.'`);
  };

  script.onerror = () => {
  console.log('Error occurred while loading script');
  };

    
    document.body.appendChild(script);
    // console.log(script)
    return null
      })
  
return () => {
      document.body.removeChild(script);
    }
  }, []);
};
export default useImportScript;