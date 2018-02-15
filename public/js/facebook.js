
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  $('.facebookLogin').hide();
  $('h1').text(response.name);
  console.log(response);
  $('img#photo').attr('src','https://scontent.xx.fbcdn.net/v/t1.0-1/s480x480/28056637_2044197585820332_7997868915934174772_n.jpg?oh=35ac01278829cc1f014b7484772eba98&oe=5B244257');

}