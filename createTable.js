const fs = require("fs");

// JSON data
const data = require("./data.json");
// Build paths
const { buildPathHtml } = require("./buildPaths");
// console.log(data[0].accountnumber);
// var string = '{"key":"234", "key":"234"}';
// var output = JSON.stringify(string);
// console.log(output);
// var output1 = JSON.parse(data[0]);
var output = JSON.stringify(data[0]);
console.log(output);
var counter = 0;
for (var i = 0; i < data.length; i++) {
  console.log(data[i].accountnumber + " ");
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var today = new Date();
const monthIndex = today.getMonth();
const monthName = months[monthIndex];
var date =
  today.getDate() +
  " " +
  monthName +
  " " +
  today
    .getFullYear()
    .toString()
    .substr(-2);

/**
 * Take an object which has the following model
 * @param {Object} item
 * @model
 * {
 * "accountnumber": `Number`,
 * }
 *
 * @returns {String}
 */

const createRow = item => `
    ${item.accountnumber}
  
`;

/**
 * @description Generates an `html` table with all the table rows
 * @param {String} rows
 * @returns {String}
 */
const createTable = rows => `
    ${rows}
  
`;

/**
 * @description Generate an `html` page with a populated table
 * @param {String} html
 * @returns {String}
 */

const createHtml = html => `
<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="stylesheet.css"/>
   
    <title>Email Template</title>
    <style>
        
      .header {
        overflow-x:auto;
        width: 100%;
        border-collapse: collapse;
        
        margin: 0 auto;
         }
      .headerlogo {
        width: 50%;
        margin-top:35px;
        margin-bottom:40px;
        background-color:#007dc5;
     
      }
      .headerstatement {
        
        width: 50%;
        
        background-color:#007dc5;
      
    }

      .nav3 {
         
        width: 1250px;
        
        height: 43px;
        background-color: #e6e7e9
      }
      .nav4 {
         
        width: 300px ;
        height: 43px;
        background-color: #e6e7e9
      }
      
      .footer1 {
           width: 200px;
        height: 38px;
        background-color: #e6e7e9
      }
      .footer2 {
         width: 30%;
        background-color: #e6e7e9;
        height: 15px;
      }
      .logos
      {
       
        width: 4%;
        background-color: #e6e7e9;
        height: 15px;
      }
      .text{
       
        width: 12%;
        background-color: #e6e7e9;
        height: 15px;
      }
      .emptydiv{
       
        width: 20%;
        background-color: #e6e7e9;
        height: 15px;
      }
    </style>
  </head>
  <body>
    <table class="header">
      <tr > 
        <td class="headerlogo">
        <img style="margin-left:56px;margin-top:25px;margin-bottom:25px; " src="Email template logos/ubllogo/ublLogo@3x.png" />
        </td>
        <td class="headerstatement" style="text-align:right;">
        <h3 style="margin-right:65px; font-size:15px; font-size:19px; color:#ffffff; font-family: aspiraregular;">Witholding Tax Statement</h3>
        <p style="margin-right:65px; margin-top:-20px; font-size:11px; color:#ffffff; font-family: aspiraregular;">Printed on <strong> ${date} </strong></p>
        </td>
      </tr>
    </table>

    <table class="header">
      <tr>
        
        <td class="nav3" style="text-align:right;">
          <p style="font-family: aspiraregular; color:  #000000; font-size:11px; ">Account number: <strong>${data[0].accountnumber}</strong></p>
        
        </td>
        <td class="nav4" style="text-align:right;">  <p style="font-family: aspiraregular; color:  #000000; font-size: 11px; margin-right:65px;   "><b style="margin-right:5px;">|</b> 0605-City Branch,Karachi</p>
        </td>
        
      </tr>
    </table>
    <table class="header">
    
      <tr>
        <td style="width: 600px">
          <p style=" font-family: aspiraregular; margin-left:56px;  margin-right:60px;   font-size: 19px; color: #000000; font-weight: bold;  ">FOR INCOME TAX PURPOSE ONLY</p>
          <p style="  margin-left:56px;  margin-right:60px; margin-top:-12px; border-bottom:1px solid black;   "></p>
          
          <p style=" font-family: aspiraregular; font-size: 12px;  margin-right:60px; margin-top:50px; color: #000000; font-weight: bold; padding-left: 56px; ">This is to certify that following ammount(s) have been paid under mentioned account during the period  01-Jul-2018 to 01-Aug-2018 </p>
        
        </td>
        
        
      </tr>
    </table>

    <table class="header" style="margin-left:56px;">
      <tr>
        <td style="width:1px;   ">
          <p style="  height:60px; background-color:#d2d3d5; margin-top:60px;  "></p>
          
           </td>
        <td style="width: 580px;  ">
          
          <p style="font-family: aspiraregular;  color: #000000; font-size: 19px; font-weight: bold; margin-left:-8px; ">Tania Khan</p>
          <p style="  font-family: aspiraregular; color:  #000000; font-size: 11px; margin-top:-8px;margin-left:8px;   ">Account Number: <strong>${data[0].accountnumber}</strong></p>
          <p style="font-family: aspiraregular; color: #000000; font-size: 11px; margin-top:-8px;  margin-left:8px; ">IBAN No: <strong>PK49 UNIL 00921234567890998665</strong></p>
          
          <p style="font-family: aspiraregular; color: #000000; font-size: 11px; margin-top:-8px; margin-left:8px;  ">CIF: <strong>01234567</strong></p>
           </td>
      </tr>
    </table>


    <table class="header">
    
      <tr>
        <td style="width: 1000px">
          <p style=" font-family: aspiraregular; margin-left:56px; margin-right:60px; font-size: 19px; color: #000000; font-weight: bold; ">Details</p>
          <p style=" border-bottom:2px solid black; margin-top:-4px; margin-left:56px; margin-right:60px;  "></p>
        
        </td>
      </tr>
    </table>

    <table class="header">
    
      <tbody>

<tr>
        
          <td style="width: 650px;">
            <p style="color:#000000; margin-left:56px;  font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">PROFIT PAID</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align:  right; margin-right:60px; font-family: aspiraregular; font-size: 11px; margin-top:-2px; color: #000000;   ">79,005.86</p>
          </td>
          
          
        </tr>
        <tr>
        
          <td style="width: 650px;">
            <p style="color:#000000; margin-left:56px;  font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">EDUCATION CESS ON PROFIT</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align:  right; margin-right:60px; font-family: aspiraregular; font-size: 11px; margin-top:-2px; color: #000000;   ">NIL</p>
          </td>
          
          
        </tr>
        <tr>
       
          <td style="width: 650px;">
            <p style="color:#000000; margin-left:56px;  font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">EDUCATION CESS ON CASH WITHDRAWAL OTHER THAN CASH TRAN</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align:  right;  margin-right:60px; font-family: aspiraregular; font-size: 11px; margin-top:-2px; color: #000000;   ">NIL</p>
          </td>
          
         
        </tr>
        <tr>
        
          <td style="width: 650px;">
            <p style="color:#000000; margin-left:56px;  font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">EDUCATION CESS ON OTHER THAN CASH TRAN</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align:  right; margin-right:60px; font-family: aspiraregular; font-size: 11px; margin-top:-2px; color: #000000;   ">8758.78</p>
          </td>
          
          
        </tr>
        <tr>
        
          <td style="width: 650px;">
            <p style="color:#000000;  margin-left:56px;  font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">REMITTANCE FRO EDUCATION PURPOSE</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; margin-top:-2px; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; text-align:  right; margin-right:60px; font-family: aspiraregular; font-size: 11px; margin-top:-2px; color: #000000;   ">NIL</p>
          </td>
          
          
        </tr>



        
        <tr>
        
          <td style="width: 650px;">
            <p style="color:#000000; margin-left:56px; margin-top:-5px; font-family: aspiraregular; font-size: 11px; color: #000000;   ">WITHHOLDING TAX ON PROFIT</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; margin-right:60px; text-align:  right; font-family: aspiraregular; font-size: 11px; color: #000000;   ">7900.58</p>
          </td>
          
        </tr>
        <tr>
        
          <td style="width: 600px">
            <p style="color:#000000; margin-left:56px; margin-top:-5px; font-family: aspiraregular; font-size: 11px; color: #000000;   ">WITHHOLDING TAX ON CASH WITHDRAWALS</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000;margin-top:-5px; margin-right:60px; text-align:  right; font-family: aspiraregular; font-size: 11px; color: #000000;   ">NIL</p>
          </td>
          
          
      
        </tr>

<tr>
        
          <td style="width: 600px">
            <p style="color:#000000; margin-left:56px; margin-top:-5px; font-family: aspiraregular; font-size: 11px; color: #000000;   ">ZAKAT DEDUCTED</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; margin-right:60px; text-align:  right; font-family: aspiraregular; font-size: 11px; color: #000000;   ">2,258,762.52</p>
          </td>
          
          
      
        </tr>


        <tr>
        
          <td style="width: 600px">
            <p style="color:#000000; margin-left:56px; margin-top:-5px; font-family: aspiraregular; font-size: 11px; color: #000000;   ">BALANCE OF ACCOUNT ON 20-JUN-2019</p>
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">PKR</p>
          
          </td>
          <td style="width: 100px">
            <p style="color:#000000; margin-top:-5px; margin-right:60px; text-align: right; font-family: aspiraregular; font-size: 11px; color: #000000;   ">CR 88,044,730.12</p>
          </td>
          
          
      
        </tr>






      </tbody>
    </table>
    
    <table class="header">
<tr>
        <td style=" width:1000px; padding-left:56px ">
        <p style="color:#000000; margin-top:20px; margin-right:60px; text-align: left; font-family: aspiraregular; font-size: 12px; color: #000000; font-weight:bold;   ">(RUPEES TWO HUNDRED SEVENTY-EIGHT THOUSAND THREE HUNDRED SEVENTY-EIGHT AND PAISA-THREE ONLY)</p>
           
        </td>

        </tr>


        <tr>
        <td style=" width:1000px; padding-left:56px ">
        <p style="color:#000000; margin-top:50px;    "></p>
           
        </td>

        </tr>
</table>
      <table class="header">
        <tr>
        
          
          <td class="footer1"  style="font-family: aspiraregular; font-size: 11px; color: #000000;padding-left:56px">
          <p width:100px;> <strong>For latest schedule of charges,Kindly visist your branch or UBL website www.ubl digital.com </strong></p>
          </td>
          <td class="footer2" style=" font-family: aspiraregular; padding-top:25px;  font-size: 11px; color: #000000;text-align:right; padding-right:65px">
          <p> <strong>www.ubldigital.com </strong></p>
          <p style="margin-top:-11px"> <strong>111-825-888 </strong></p>
          </td>
        </tr>
      </table>

      <table class="header">
            <tr>
              <td  style="width:0.5%;background-color: #e6e7e9;" >
              <img style="margin-left:56px; width:13px; height:13px" src="Email template logos/facebook/combinedShape@3x.png" alt=""/>
              </td>
              <td  style="width:4%;font-family: aspiraregular;background-color: #e6e7e9;font-size: 9px; color: #000000;">
              <p style="padding-top:-10px">UBLUnitedBankLtd</p>
              </td>
              <td class="" style="width:0.5%;background-color: #e6e7e9;">
              <img  style=" width:13px; height:13px" src="Email template logos/twitter/combinedShape@3x.png" alt=""/>
            
              </td>
              <td class="" style=" width:4%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
                <p style="">ubldigital</p>
           
              </td>
              <td class="" style="width:0.5%;background-color: #e6e7e9;" >
              <img style=" width:13px; height:13px" src="Email template logos/linkedin/fill1@3x.png" alt=""/>
            </td>
              <td class="text" style=" width:4%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
                <p style="margin-left:">ubldigital</p>
           </td>
              <td class="" style="width:0.5%;background-color: #e6e7e9;" >
              <img style=" width:13px; height:13px" src="Email template logos/instagram/group2@3x.png" alt=""/>
            </td>
              <td class="text" style=" width:8%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
                <p style="margin-left:">United-Bank-Limited</p>
           </td>
              <td class="" style="width:0.5%;background-color: #e6e7e9;">
              <img style=" width:13px; height:13px" src="Email template logos/youtube/combinedShape@3x.png" alt=""/>
            </td>
              <td class="text" style="width:4%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
                <p style="margin-left:">ubldigital</p>
           </td>
              <td class="emptydiv"></td>
              
            
            
            </tr>
          </table>
    </table>
  </body>
</html>
`;

/**
 * @description this method takes in a path as a string & returns true/false
 * as to if the specified file path exists in the system or not.
 * @param {String} filePath
 * @returns {Boolean}
 */
// const doesFileExist = filePath => {
//   try {
//     fs.statSync(filePath); // get information of the specified file path.
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

try {
  /* Check if the file for `html` build exists in system or not */
  // if (doesFileExist(buildPathHtml)) {
  //   // console.log("Deleting old build file");
  //   /* If the file exists delete the file from system */
  //   // fs.unlinkSync(buildPathHtml);
  // }
  /* generate rows */
  const rows = data.map(createRow).join("");
  /* generate table */
  const table = createTable(rows);
  /* generate html */
  const html = createHtml(table);
  /* write the generated html to file */
  fs.writeFileSync(buildPathHtml, html);

  console.log("Succesfully created an HTML table");
} catch (error) {
  console.log("Error generating table", error);
}
