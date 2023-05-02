import { useEffect } from "react";
// import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
// import 'datatables/media/css/jquery.dataTables.min.css'
// import 'datatables/media/js/jquery.dataTables.min.js'
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";

const initDataTables = (selector:any,message="") =>{
        
            selector.DataTable({
              searching: true,
                paging:true,
                // pagingType:'number',
                select: false,
                //info: false,         
                lengthChange:true ,
              lengthMenu: [
                [10, 20, 30, 50, -1],
                [10, 20, 30, 50, "All"],
              ],
               
                language: {
                  "emptyTable": `<div class="d-flex justify-content-center align-items-center flex-column"><img src='dashboard-assets/images/images/no-result.png'><p>Hey!, No Results Found</p></div>`,
                  search: "<i class='fa fa-search search-icon my-5'></i>",
                  lengthMenu: '_MENU_ ',
                  paginate : {
                  	first    : '<i class="fa fa-angle-double-left"></i>',
                  	last     : '<i class="fa fa-angle-double-right"></i>',
                  	previous : '<i class="fa fa-angle-left"></i>',
                  	next     : '<i class="fa fa-angle-right"></i>'
                  }
                  
                },
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
  
            });


}
export const destroyDataTables = (selector:any) =>{
  if(($ as any).fn.DataTable.isDataTable(selector)) selector.DataTable().destroy().clear();

} 
export default initDataTables;