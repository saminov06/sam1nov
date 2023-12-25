fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        var img1 = document.getElementById('img1')
        var p1 = document.getElementById('p1')
        var img2 = document.getElementById('img2')
        var p2 = document.getElementById('p2')
        var img3 = document.getElementById('img3')
        var p3 = document.getElementById('p3')
        var img4 = document.getElementById('img4')
        var p4 = document.getElementById('p4')
        var img5 = document.getElementById('img5')
        var p5 = document.getElementById('p5')

        





         var body = document.body;
         img5.setAttribute('src', json[0].thumbnailUrl)
         p5.innerText = json[0].title
         img4.setAttribute('src', json[0].thumbnailUrl)
         p4.innerText = json[0].title
         img1.setAttribute('src', json[0].thumbnailUrl);
         p1.innerText = json[0].title
         img2.setAttribute('src', json[0].thumbnailUrl)
          p2.innerText = json[0].title
          img3.setAttribute('src', json[0].thumbnailUrl)
           p3.innerText = json[0].title
           img4.setAttribute('src', json[0].thumbnailUrl)
           p4.innerText = json[0].title
   
      });
      function qosh(){
        var span1 = document.getElementById('span1');
        var s = span1.innerText * 1;
        span1.innerText = ++s;
      }
      function qosh1(){
        var span2 = document.getElementById('span2');
        var s = span2.innerText * 1;
        span2.innerText = ++s;
      }