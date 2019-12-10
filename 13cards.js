// var changeSuitTo;
new Vue({
    el:"#app",
    data:{
        showCards:true,
        showSkew:false,
        numbers:['A',2,3,4,5,6,7,8,9,10,'J','Q','K'],
        rearrangedNumbers:['A',2,3,4,5,6,7,8,9,10,'J','Q','K'],
        swappedNumbers:[],
        noofsuits:[],
        fadeout:true,
        bindingClass:'',
        suits:{
            Heart:'<i class="red"><span>&#9829;</span></i>',
            Spades:'<i class="black"><span>&#9824;</span></i>',
            Club:'<i class="black"><span>&#9827;</span></i>',
            Diamond:'<i class="red"><span>&#9830;</span></i>'
        },
        currentSuit :'<i class="fas fa-heart-broken"></i>',
        showSelection:false,
        showrotateselection:false,
        facecards:['<img src="https://img.icons8.com/ios-filled/50/000000/joker-card.png">','<img src="https://img.icons8.com/color/48/000000/queen-uk.png">','<img src="https://img.icons8.com/ios-filled/50/000000/fairytale.png">'],
        showswapselection:false,
        xory:'',
        Value:0,
        Style:{},
        showskewform:false,
        randomvalue:50,
        SkewX:{ 
            transition:'all 1s ease-in-out',
            transform:`skewX(23deg)`
        },
        SkewY:{
            transition:'all 1s ease-in-out',
            transform:`skewY(23deg)`
        },
        showScale:false,
        showscaleform:false,
        ScaleX:{ 
            transition:'all 1s ease-in-out',
            transform:`scaleX(1.4)`
        },
        ScaleY:{
            transition:'all 1s ease-in-out',
            transform:`scaleY(1.4)`
        },
        show3D:false,
        show3dform:false,
        show3dselection:false,
        xyza:{
            x:'0',
            y:'0',
            z:'0',
            a:'0',
        },
        d3rotationstyle:{
            // transform : rotate3d(this.xyza.x)
            //  "`rotate3d(${this.xyza.x},${this.xyza.y},${this.xyza.z},${this.xyza.a})`"
        },
        showtranslateform:false,
        txyz:{
            tx:'0',
            ty:'0',
            tz:'0'
        },
        translatestyle:{

        },
        show3dscaleform:false,
        sxyz:{
            sx:'0',
            sy:'0',
            sz:'0',
        },
        scalestyle:{

        },
        showperspective:false,
        showperspectiveform:false,
        // perspectivevalue:33,
        perspectivestyle:{
            perspective : '150px',
            transition: 'perspective 3s ease-in-out'
        },
    },
    methods:{
        rotateCard(){
            if(!this.bindingClass){
                // this.bindingClass='';
                console.log('rotation successfully');
                this.bindingClass = 'rotate';
               this.removeBindingClass();
            }
        },
        showrotateXYZ(){
            this.showrotateselection = true;
        },
        rotateX(){
            this.bindingClass = 'rotateX';
            this.removeBindingClass();
        },
        rotateY(){
            this.bindingClass = 'rotateY';
            this.removeBindingClass();
        },
        rotateZ(){
            this.bindingClass = 'rotateZ';
            this.removeBindingClass();
        },
        cancelrotate(){
            this.showrotateselection= false;
        },
        flipCard(){
            console.log('flipped successfully');
            if(!this.bindingClass){
                this.bindingClass='flip';
                this.removeBindingClass();
            }
        },
        /* swapCard(){
            console.log('swapped successfully');
        } */
        fadeOut(){
            this.fadeout=false;
            console.log('faded out');
            if(!this.bindingClass){
                this.bindingClass='fadeout';
                // this.removeBindingClass();
            }
        },
        fadeIn(){
            this.fadeout=true;
            console.log("faded in");
            if(this.bindingClass){
                this.bindingClass ='fadein';
                this.removeBindingClass();
            }
        },
        changeSuit(){
            
            console.log('suit changed');
            this.showSelection=true;
        },
        swapCard(){
            console.log('swapping cards');
            this.showswapselection =true;
            for(var i = 0 ; this.swappedNumbers.length < 13 ; i++){
                var random = this.numbers[Math.floor(Math.random()*this.numbers.length)];
                if(!this.swappedNumbers.includes(random)){
                    this.swappedNumbers.push(random);
                    }
            }
            this.numbers = this.swappedNumbers;
            //copy the existing array of the numbers and the number of suits and facecards too into other array
            //and get the random index and swap the value of that index from both array and copy that to new arrays
            //while decrementing the length of the original array.

        },
        rearrange(){
            this.numbers = this.rearrangedNumbers;
            this.showswapselection= false;
        },
        removeBindingClass(){
            setTimeout(() => {
                this.bindingClass='';
            }, 2000);
        },
        heart(){
            this.currentSuit=this.suits.Heart;
        },
        diamond(){
            this.currentSuit = this.suits.Diamond;
        },
        spades(){
            this.currentSuit = this.suits.Spades;
        },
        club(){
            this.currentSuit = this.suits.Club;
        },
        cancelsuits(){
            this.showSelection=false;
        },
        display(n){
            this.noofsuits=[];
            do{
                this.noofsuits.push(this.currentSuit);
                n--;
            }while(n);
        },
        skewshow(){
            this.showCards=false;
            this.showSkew=true;
            this.Style='';
        },
        skewcancel(){
            this.showCards=true;
            this.showSkew=false;
        },
        skewform(){
            this.showskewform=true;
        },
        skewX(){
            this.skewform();
            this.xory='';
            this.Style='';
            this.xory='X';
        },
        skewY(){
            this.skewform();
            this.xory='';
            this.Style='';
            this.xory='Y';     
        },
        skewdone(){
            console.log(this.Value);
            console.log(this.Style);
            if(this.xory == 'X'){
                this.Value = this.Value;
                this.Style= this.SkewX;
                console.log(this.Style);
            }else{
                this.Style= this.SkewY;
                console.log(this.Style);
            }
        },
        scaleshow(){
            this.showCards=false;
            this.showScale=true;
            this.style='';
            this.showscaleform=false;
        },
        scalecancel(){
            this.showCards=true;
            this.showScale=false;
        },
        scaleform(){
            this.showscaleform=true;
        },
        scaleX(){
            this.scaleform();
            this.xory='';
            this.xory='X';
            this.Style='';
        },
        scaleY(){
            this.scaleform();
            this.xory='';
            this.xory='Y';     
            this.Style='';
        },
        scaledone(){
            console.log(this.Value);
            console.log(this.Style);
            if(this.xory == 'X'){
                // console.log('scale x');
                this.Style= this.ScaleX;
                console.log(this.Style);
            }else{
                this.Style= this.ScaleY;
                console.log(this.Style);
            }
        },
        D3show(){
            this.showCards=false;
            this.show3D= true;
            this.Style = '';
            this.show3dform =false;
            this.showtranslateform=false;
            this.showscaleform=false;
            
        },
        cancel(){
            this.showCards=true;
            this.show3D = false;
        },
        rotate3D(){
            this.show3dform=true;
            this.show3dscaleform=false;
            this.showtranslateform=false;
            // this.show3dselection = true;
        },
        d3done(){
            //execute the transformation
            console.log('3D rotation executed.');
            console.log(`values: `);
            console.log(this.xyza);
            this.Style= this.d3rotationstyle;
            console.log(this.Style);
        },
        translate3D(){
            this.show3dform=false;
            this.show3dscaleform=false;
            this.showtranslateform=true;
        },
        translatedone(){
            //execute the transformation
        },
        scale3D(){
            this.show3dscaleform=true;
            this.show3dform=false;
            this.showtranslateform=false;
        },
        scale3ddone(){

        },
        perspective(){
            this.showCards=false;
            this.showperspective=true;
        },
        changeperspective(){
            this.showperspectiveform=true;
        },
        perspectivedone(){
            console.log(this.perspectivestyle);
            this.Style= this.perspectivestyle;
        },
        cancelperspective(){
            this.showperspective=false;
            this.showCards=true;
        }
    }
})