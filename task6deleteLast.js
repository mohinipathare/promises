const posts=[
    {
        title:"post One",
        body:"this is post one",
        createdAt:new Date().getTime()
    }
    // {
    //     title:"post Two",
    //     body:"this is post Two",
    //     createdAt:new Date().getTime()
    // }
];
let intervalId=0;
function getPost()
{
    clearInterval(intervalId);
    //timerId
    intervalId=setInterval(()=>
    {
        let output='';
        for(let i=0;i<posts.length;i++)
        {
            output+=`<li>${posts[i].title}-last updated ${((new Date().getTime())-(posts[i].createdAt))/1000} seconds ago </li>`;
        }
        //console.log(timerId);
        console.log("timer running id",intervalId);
        document.body.innerHTML=output;

    },1000);
}
//getPost();
function create2ndPost(post,callback)
{
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    }, 2000);
}
function create3rdPost(post,callback)
{
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    }, 3000);
}
function created4thPost(post,callback)
{
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback()
    }, 4000);
}
function deletepost()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.pop();
          //splice(post);
          resolve();
        }, 5000);
      });
}

    posts.forEach((post)=>{
    setInterval(() => {
        deletepost().then(() => {
            deletepost().then(() => {
              deletepost();
              });
          });
     }, 4000);
    })
    

 //console.log("empty");



getPost();
create2ndPost({title:'post Two',body:'This is post two'},getPost);
create3rdPost({title:'post Three',body:'This is post Three'},getPost);
created4thPost({title:'post Four',body:'This is post Four'},getPost);
var timer;
var count=0;
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(timer);
    timer=setInterval(()=>
    {
        //set
        count++;
        console.log(count)

    },1000);
}
//lastEditedInSecondsAgo();
