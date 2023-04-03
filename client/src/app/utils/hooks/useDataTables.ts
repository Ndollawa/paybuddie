import { useEffect } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";


const useDataTables = (selector:any,message="") =>{
    
useEffect(() => {
        $(document).ready(function () {
        
            selector.DataTable({
              lengthMenu: [
                [10, 20, 30, 50, -1],
                [10, 20, 30, 50, "All"],
              ],
              dom: "Bfrtip",
              buttons: [

                  {extend: 'csv',
                messageTop: message,
                className: 'btn-success text-white btn-sm rounded-pill',
              exportOptions:{
                columns:':visible',

              }}, 
               {extend: 'excel',
                messageTop: message,
              className: 'btn-success btn-sm rounded-pill',
              exportOptions:{
                columns:':visible',

              }},  {extend: 'pdf',
                messageTop: message,
              className: 'btn-danger btn-sm rounded-pill',
              exportOptions:{
                columns:':visible',

              }}, {extend: 'print',
                messageTop: message, 
              className: 'btn-dark btn-sm rounded-pill',
              exportOptions:{
                columns:':visible',
              

              }},
               {extend: 'colvis',
                messageTop: message,
              className: 'btn-primary text-white btn-sm rounded-pill',
              collectionLayout: 'fixed two-column'
              
            }
             
            ],
  
            } as any);
        });
  return () => {
selector.DataTable().clear().destroy();
  };
},[])


}

export default useDataTables;