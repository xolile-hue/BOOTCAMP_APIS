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
document.addEventListener('alpine:init', () => {
    Alpine.data('BootcampWidget2', function(){
        return {
            phoneBill : "",
            billAmount:"0",

            checkPhoneBill() {
                // alert(this.phoneBill);
                
                axios
                    .get(`api/total_Phone_Bill?phonebill=${this.phoneBill}`)
                    .then((result) => {
                        // console.log(result.data);
                        this.billAmount = result.data.Bill_amount;
                        // this.shortestWord = result.data.shortestword;
                        // this.wordLengths = result.data.sum;
                    });
            },
            
        }
    });
});
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