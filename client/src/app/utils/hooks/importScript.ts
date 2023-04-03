import React, {useEffect} from 'react';

const useImportScript = (resourceUrl:string[])=> {
 
      const scriptHolder = document.createElement('div');
      scriptHolder.id='scriptHolder';
      document.body.appendChild(scriptHolder);
      
  useEffect(
    () => {
      // let scripts
      let script:HTMLScriptElement;
    resourceUrl.map(url=>{
    script = document.createElement('script');
    script.src = url;
    // script.type='text/javascript';
    // script.async = true;
    script.defer = true;
    script.type = 'text/barbel';

  script.onload = () => {
  // console.log(`The script '${url}'has loaded.'`);
  };

  script.onerror = () => {
  console.log('Error occurred while loading script');
  };

  document?.getElementById('scriptHolder')?.appendChild(script);
   
    // console.log(scriptHolder)
      })
return () => {
  
      document?.getElementById('scriptHolder')?.remove();
    }
  }, []);
};
export default useImportScript;