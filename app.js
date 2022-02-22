// function loadPost (){
    
// }


            {/* <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div> */}

document.getElementById('btn').addEventListener('click', function(){
    fetch('https://iamyeasirarafat.github.io/sample/podgst.json')
    .then (response => response.json())
    .then(data => getPost(data))
    function getPost(posts){
        const blogContainer = document.getElementById('blog-container')
        for (const post of posts) {
            const postContainer = document.createElement('div');
            postContainer.classList.add('card')
            postContainer.classList.add('col-lg-3')
            postContainer.classList.add('me-4')
            postContainer.setAttribute("style", "width: 18rem;");
            postContainer.innerHTML=`
            
                   <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <p class="card-text">${post.body}</p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
            
            `
            blogContainer.appendChild(postContainer);
        }
    }
})