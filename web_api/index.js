    const quoteList = [["<p>In three words I can sum up everything I have learned about life: It goes on.",
              "<br>Robert Frost</p>"], 

              ["<p>The future belongs to those who prepare for it today.",
              "<br>Malcolm X</p>"],
             
              ["<p>It always seems impossible until it is done.",
              "<br>Nelson Mandela</p>"],
            
              ["<p>When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
              "<br>Audre Lorde</p>"],
           
              ["<p>I have no special talent. I am only passionately curious.",
              "<br>Albert Einstein</p>"]
             ]
    const colorList = ["#ED7179","#EE9C6A","#F64A5C","#879E46","#D99B26"];
    const quote=document.getElementById("quote");
    const color=document.querySelector('body');
    const button = document.getElementById("new_quote_btn");

    button.addEventListener("click", ()=>{
        const randomQuote = quoteList[Math.floor(Math.random()*quoteList.length)];
        quote.innerHTML= randomQuote;
        return randomQuote;
    }
    )
    button.addEventListener("click", ()=>{
        const randomColor = colorList[Math.floor(Math.random()*colorList.length)];
        color.style.color = randomColor;
        color.style.backgroundColor = randomColor;
        button.style.backgroundColor = randomColor;
        return randomColor;
    })

