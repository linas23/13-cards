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
        Value:'',
        showskewform:false,
        randomvalue:50,
        showScale:false,
        showscaleform:false,
        scaleStyle:{},
        skewStyle:{},
        threedstyle:{},
        show3D:false,
        show3dform:false,
        show3dselection:false,
        xyza:{
            x:'0',
            y:'0',
            z:'0',
            a:'0',
        },
        showtranslateform:false,
        txyz:{
            tx:'0',
            ty:'0',
            tz:'0'
        },
        show3dscaleform:false,
        sxyz:{
            sx:'0',
            sy:'0',
            sz:'0',
        },
        showperspective:false,
        showperspectiveform:false,
        perspectiveStyle:{},
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
            this.Value=0;
            this.skewStyle={};
        },
        skewY(){
            this.skewform();
            this.xory='';
            this.Style='';
            this.xory='Y';   
            this.Value=0;  
            this.skewStyle={};
        },
        skewdone(){
            var value = this.Value;
            if(this.xory == 'X'){
                this.skewStyle={
                    transform:`skewX(${value}deg)`,
                    transition:'all 1.5s ease'
                };
            }else{
                this.skewStyle={
                    transform:`skewY(${value}deg)`,
                    transition:'all 1.5s ease'
                };
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
            this.Value=0;
            this.scaleStyle={};
        },
        scaleY(){
            this.scaleform();
            this.xory='';
            this.xory='Y';     
            this.Value=0;
            this.scaleStyle={};
        },
        scaledone(){
            // console.log(this.Value);
            // console.log(this.Style);
            var value = this.Value;
            if(this.xory == 'X'){
                console.log(this.xory);
                console.log(this.Value);
                this.scaleStyle = {
                    transform:`scaleX(${value})`,
                    transition:'all 1.5s ease'
                };
                console.log(this.scaleStyle);
            }else{
                console.log(this.xory);
                console.log(this.Value);
                this.scaleStyle = {
                    transform : `scaleY(${value})`, 
                    transition:'all 1.5s ease'
                };
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
            this.threedstyle={};
        },
        d3done(){
            //execute the transformation
            console.log(this.threedstyle);
            console.log('3D rotation executed.');
            console.log(this.xyza);
            var x,y,z,a;
            x= this.xyza.x;
            y= this.xyza.y;
            z= this.xyza.z;
            a= this.xyza.a;
            this.threedstyle={
                transform: `rotate3d(${x},${y},${z},${a}deg)`,
                transition:`all 1.5s ease`
            };
            console.log(this.threedstyle);
        },
        translate3D(){
            this.show3dform=false;
            this.show3dscaleform=false;
            this.showtranslateform=true;
            this.threedstyle={};
        },
        translatedone(){
            //execute the transformation
            console.log('translating');
            var tx,ty,tz;
            tx=this.txyz.tx;
            ty=this.txyz.ty;
            tz=this.txyz.tz;
            this.threedstyle={
                transform: `translate3d(${tx}px,${ty}px,${tz}px)`,
                transition: 'all 1.5s ease' 
            };
        },
        scale3D(){
            this.show3dscaleform=true;
            this.show3dform=false;
            this.showtranslateform=false;
            this.threedstyle={};
        },
        scale3ddone(){
            console.log('scaling');
            var sx,sy,sz;
            sx= this.sxyz.sx;
            sy=this.sxyz.sy;
            sz=this.sxyz.sz;
            this.threedstyle={
                transform:`scale3d(${sx},${sy},${sz})`,
                transition:'all 1.5s ease'
            }
        },
        perspective(){
            this.showCards=false;
            this.showperspective=true;
            this.perspectiveStyle={};
        },
        changeperspective(){
            this.showperspectiveform=true;
            this.Value=0;
        },
        perspectivedone(){
            var value = this.Value;
            this.perspectiveStyle= {
                perspective:`${value}px`,
                transition:'all 2s ease'
            };
        },
        cancelperspective(){
            this.showperspective=false;
            this.showCards=true;
        }
    }
})