export default function totalPhoneBill(phoneBill){
    const Bill = phoneBill.split(",");
    let call = 2.75; 
    let sms = 0.65;
    var totalBill = 0;
      
      for (var i = 0 ; i < Bill.length; i++ ){
      let BillList = Bill[i].trim();
        
        if (BillList === "call"){
        totalBill = totalBill + call;
        }else {
            totalBill = totalBill + sms;
        }
      }
      return "R" + totalBill.toFixed(2) ;
    }