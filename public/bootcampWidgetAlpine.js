document.addEventListener('alpine:init', () => {
    Alpine.data('BootcampWidget1', function(){
        return {
            sentence : "",
            longestWord:"",
            shortestWord:"",
            wordLengths:"0",

            checkSentence() {
                // alert(this.sentence);
                
                axios
                    .get(`/api/word_game?sentence=${this.sentence}`)
                    .then((result) => {
                        // console.log(result.data);
                        this.longestWord = result.data.longestword;
                        this.shortestWord = result.data.shortestword;
                        this.wordLengths = result.data.sum;
                    });
            },
            
        }
    });
});
//-------------------------------------------------------------------------//
// document.addEventListener('alpine:init', () => {
//     Alpine.data('BootcampWidget2', function(){
//         return {

//             init(){

//                 axios
//                   .get(`https://afternoon-depths-41017.herokuapp.com/api/price_plans`)
//                   .then((result) => {
//                     this.price_plan = result.data.price_plans;
//                     console.log(this.price_plan)
//                   });
//             },
//             checkPhoneBill(price_plan) {
//                 const params = {
//                     plan_name: price_plan.plan_name,
//                     sms_price: price_plan.sms_price,
//                     call_price: price_plan.call_price,
//                   }
//                 // alert(this.phoneBill);
                
//                 axios
//                     .post(`https://afternoon-depths-41017.herokuapp.com/api/phonebill/?actions=${this.phoneBill}&price_plan=${this.plan_name}`, params)
//                     .then((result) => {
//                         console.log(result.data);
//                         // this.billAmount = result.data.Bill_amount;
//                         // this.shortestWord = result.data.shortestword;
//                         // this.wordLengths = result.data.sum;
//                     });
//             },


//             price_plan : [],
//             phoneBill : "",
//             plan_name : "",
//             billAmount:"0",
//             // checkPhoneBill() {
//             //     // alert(this.phoneBill);
                
//             //     axios
//             //         .get(`api/total_Phone_Bill?phonebill=${this.phoneBill}`)
//             //         .then((result) => {
//             //             // console.log(result.data);
//             //             this.billAmount = result.data.Bill_amount;
//             //             // this.shortestWord = result.data.shortestword;
//             //             // this.wordLengths = result.data.sum;
//             //         });
//             // },
            
//         }
//     });
// });
//-------------------------------------------------------------------------//
document.addEventListener('alpine:init', () => {
    Alpine.data('BootcampWidget3', function(){
        return {
            phoneBill : "",
            airtimeAvailable: '',
            Airtimeleft:"0",

            checkAirtime() {
                // alert(this.phoneBill);
                
                axios
                    .get(`/api/enough_Airtime?phonebill=${this.phoneBill}&airtimeAvailable=${this.airtimeAvailable}`)
                    .then((result) => {
                        // console.log(result.data);
                        this.Airtimeleft = result.data.Air_remain;
                        // this.shortestWord = result.data.shortestword;
                        // this.wordLengths = result.data.sum;
                    });
            },
            
        }
    });
});