const posts=[
    {
        title:"post One",
        body:"this is post one",
        createdAt:new Date().getTime()
    }
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
function printPost()
{

    return new Promise((resolve,reject)=>{ setTimeout(() => {
        //let user='';
        var output='';
        const error=false;
        if(!error)
        {
        for(let i=0;i<posts.length;i++)
        {
            output+=posts[i].title+", ";
             //console.log(output);        
        }  
         resolve(output);
        }
        else
        {
         reject('Error:something went wrong');
        }
     }, 1000);
 
    })
}
function create2ndPost(post)
{
    return new Promise((resolve,reject)=>
    { 
        setTimeout(() => 
        {
        posts.push({...post,createdAt:new Date().getTime()});
        const error=false;
        if(!error){
        resolve();
       }
       else{
        reject('Error:something went wrong');
       }
    }, 1000);
})}

function create3rdPost(post)
{
    return new Promise((resolve,reject)=>{ setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
       const error=false;
       if(!error){
        resolve();
       }
       else{
        reject('Error:something went wrong');
       }
    }, 1000);
})
}
function create4thPost(post)
{
    return new Promise((resolve,reject)=>{ setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
       const error=false;
       if(!error){
        resolve();
       }
       else{
        reject('Error:something went wrong');
       }
    }, 1000);
})
}

 function updateLastUserActivityTime()
 {
     return new Promise((resolve,reject)=>{ setTimeout(() => {
        let user='user1';
        let lastactive=new Date();

        const error=false;
        if(!error)
        {
         let x=(`${user} last active at ${lastactive}`); 
         resolve(x);
         //console.log(new Date());
           
        }
        else
        {
         reject('Error:something went wrong');
        }
     },1000);
 
    })
 }
function deletepost()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.pop();
          
          resolve();
        }, 5000);
        
      });
}
getPost();
create2ndPost({title:'post Two',body:'This is post two'}).then(getPost).then(updateLastUserActivityTime);
create3rdPost({title:'post Three',body:'This is post Three'}).then(getPost).then(updateLastUserActivityTime);
create4thPost({title:'post Four',body:'This is post Four'}).then(getPost).then(updateLastUserActivityTime);
const p5=printPost();
console.log(p5);
const p6=deletepost();
const p7=printPost();
Promise.all([p6,p7,updateLastUserActivityTime()]).then((values)=>{
    console.log(values);
});
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

    },5000);
}
//lastEditedInSecondsAgo();
