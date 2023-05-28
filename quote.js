const quo= document.querySelector('h2')
const authour= document.querySelector('h3')


let Quote=[

]



function QuoteNew(){
    
    document.querySelector('button').addEventListener('click',QuoteNew)
    const q= Quote[Math.floor(Math.random()*Quote.length)]
quo.textContent=q.text;
authour.textContent= q.author;
audio.play()

if (!q.author){
    authour.textContent='Unknown'
}
else{
    authour.textContent=q.author;
}
}


async function quotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
    const response=await fetch(apiUrl)
    Quote= await response.json()
        QuoteNew()
    }
    catch(error){
        
    }
}

quotes();