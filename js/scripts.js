//business Logic

//User Logic
$(document).ready(function (event) {
  // user story one.
  $('#celebrateHealth, #link1').click(function (event) {
    event.preventDefault()

    $('#userStoriesPage').show()
  })
  $('#closeStory').click(function () {
    $('#userStoriesPage').hide()

  })
  // user story 2.
  $('#coupleStress, #link2').click(function(event){
    event.preventDefault()
    $('#story2').show()
  })
  $('#closeStory2').click(function () {
    $('#story2').hide()
  })
  // user story 3
  $('#mindCleansing, #link3').click(function(event){
    event.preventDefault()
    $('#story3').show()
  })
  $('#closeStory3').click(function () {
    $('#story3').hide()
  })
  // user story 4
  $('#crashing, #link4').click(function(event){
    event.preventDefault()
    $('#story4').show()
  })
  $('#closeStory4').click(function () {
    $('#story4').hide()
  })
  // signup page.
  $('#signUpPage').click(function(event){
    event.preventDefault()
    $('#signupCont').show()
  })
  $('button#cancel').click(function(event){
    event.preventDefault()
    $('#signupCont').hide()
  })
})