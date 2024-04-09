lipX =0;
lipY=0;


function preload()
{
    lip_filter= loadImage('https://images.search.yahoo.com/images/view;_ylt=Awr99tNrexVmhjISwgKJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2Q2YjNiYTFlNmQxMzY3ODBjNzZlNTA3MDY1NTk0M2MxBGdwb3MDMzE5BGl0A2Jpbmc-?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlip%2Bfilter%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D319&w=5000&h=5000&imgurl=static.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F554%2F647%2Foriginal%2Fsexy-lips-vector-icon.jpg&rurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Flips-icon&size=372.2KB&p=lip+filter&oid=d6b3ba1e6d136780c76e5070655943c1&fr2=piv-web&fr=mcafee&tt=Lips+Icon+Vector+Art%2C+Icons%2C+and+Graphics+for+Free+Download&b=301&ni=21&no=319&ts=&tab=organic&sigr=PIkFvZhw2Ahm&sigb=vfW_BNGiPdaE&sigi=aMMsMrp7n5TN&sigt=Rc_cKB63s2Uk&.crumb=iP2QGCkWrVM&fr=mcafee&fr2=piv-web&type=E211US714G0')
} 
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
}
function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}
function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
stroke(255,0,0);
circle(lipX, lipY, 20);
image(clown_nose, lipX, lipY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotpose(results)
{
    if(results.length> 0)
    {
console.log(results);
noseX =results[0].pose.lip.x;
noseY = results[0].pose.lip.y;
    console.log("lip x=" +lipX);
    console.log("lip y=" +lipY);

    }
}
