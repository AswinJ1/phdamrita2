$(document).ready(function(){
    var emailID = '';
    var LName = '';
    var contactL = '';
    var qualification_id ='';
    var discipline_id ='';
    jQuery(function() {
      const queryString = window.location.search;
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      const source = urlParams.get('utm_source')
      console.log(source);
      const medium = urlParams.get('utm_medium')
      console.log(medium);
      const campaign = urlParams.get('utm_campaign')
      console.log(campaign);
      const adgroupid = urlParams.get('utm_adgroupid')
      console.log(adgroupid);
      jQuery("form.signup-form input[name='Source']").val(source);
      jQuery("form.signup-form input[name='Medium']").val(medium);
      jQuery("form.signup-form input[name='Campaign']").val(campaign);
      jQuery("form.signup-form input[name='Adgroupid']").val(adgroupid);

        // empty string
      jQuery("form.signup-form").submit(function(ev) {
        ev.preventDefault();
        emailID = jQuery("form.signup-form input[name='email']").val();
        contactL = jQuery("form.signup-form input[name='contact']").val();
        LName = jQuery("form.signup-form input[name='fname']").val();
        qualification_id = jQuery("form.signup-form input[name='qualification_id']").val();
        discipline_id = jQuery("form.signup-form input[name='discipline_id']").val();
        console.log(jQuery(this).serializeArray());
        var att = 'https://aoap.amrita.edu/lead-manager/aoap-sync/index';
        var apiData = '&email_id='+emailID+'&course_id=1&utm_source=MTechLanding&auth_key=mtechlanding2020keyascsa&lead_name='+LName+'&phone_no='+contactL+'&qualification_id='+qualification_id+'&discipline_id='+discipline_id;
        console.log(apiData);
        $.ajax({
          type: "POST",
          url: jQuery(this).attr('action'),
          data: jQuery(this).serializeArray(),
          success: function (msg) {
            var originalURL = att+"?"+apiData;
            var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL

            $.ajax({
              url: queryURL,
              method: "POST",
              dataType: "json",
              // this headers section is necessary for CORS-anywhere
              headers: {
              "x-requested-with": "xhr"
              }
            }).done(function(response) {
              console.log('CORS anywhere response', response);
            }).fail(function(jqXHR, textStatus) {
              console.error(textStatus)
            });
            $.post(att, apiData ).done(function (data) {
							alert(data);
						});
            $('#redirectModal').modal('show');
            jQuery("form.signup-form")[0].reset();
          },
        });
      });
    });

  $(".portfolio-item").on("click",function(){
    let currentDepartment = $(this).data()['discription'];
    $(".custom-link").empty();
    switch (currentDepartment) {
      case "Artificial Intelligence":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-artificial-intelligence" target="_blank">Learn about Artificial Intelligence</a>');
        break;
      case "AI & Data Science":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-artificial-intelligence-data-science" target="_blank">Learn about AI & Data Science</a>');
        break;
      case "Automotive Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-automotive-engineering" target="_blank">Learn about Automotive Engineering</a>');
        break;
      case "Bio-Medical Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-bio-medical-engineering" target="_blank">Learn about Bio-Medical Engineering</a>');
        break;
      case "Biomedical Instrumentation":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-biomedical-instrumentation-signal-processing" target="_blank">Learn about Biomedical Instrumentation</a>');
        break;
      case "Communication & Information Systems":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-communication-and-information-systems" target="_blank">Learn about Communication & Information Systems</a>');
        break;
      case "Communication Systems":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-communication-systems" target="_blank">Learn about Communication Systems</a>');
        break;
      case "Computational Engineering & Networking":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-computational-engineering-networking" target="_blank">Learn about Computational Engineering & Networking</a>');
        break;
      case "Computer Science & Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-computer-science-engineering" target="_blank">Learn about Computer Science & Engineering</a>');
        break;
      case "Cyber Security":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-cyber-security" target="_blank">Learn about Cyber Security</a>');
        break;
        case "Cyber Security Systems & Networks":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-cyber-security-systems-and-networks" target="_blank">Learn about Cyber Security Systems & Networks</a>');
        break;
      case "Data Science":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-data-science" target="_blank">Learn about Data Science</a>');
        break;
      case "Embedded Control and Automation":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-embedded-control-and-automation" target="_blank">Learn about Embedded Control and Automation</a>');
        break;
      case "Embedded Systems":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-embedded-system" target="_blank">Learn about Embedded Systems</a>');
        break;
      case "Engineering Design":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-engineering-design" target="_blank">Learn about Engineering Design</a>');
        break;
      case "Geoinformatics & Earth Observation":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-geoinformatics-earth-observation" target="_blank">Learn about Geoinformatics & Earth Observation</a>');
        break;
      case "Industrial Intelligent Systems":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-industrial-intelligent-systems" target="_blank">Learn about Industrial Intelligent Systems</a>');
        break;
      case "Manufacturing Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-manufacturing-engineering" target="_blank">Learn about Manufacturing Engineering</a>');
        break;
      case "Materials Science and Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-material-science-and-engineering" target="_blank">Learn about Materials Science and Engineering</a>');
        break;
      case "Power and Energy":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-power-energy-engineering" target="_blank">Learn about Power and Energy</a>');
        break;
      case "Power Electronics and Drives":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-power-electronics" target="_blank">Learn about Power Electronics and Drives</a>');
        break;
      case "Renewable Energy Technologies":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-renewable-energy-technology" target="_blank">Learn about Renewable Energy Technologies</a>');
        break;
      case "Robotics & Automation":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-robotics-and-automation" target="_blank">Learn about Robotics & Automation</a>');
        break;
      case "Structural & Construction Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-structural-construction-engineering" target="_blank">Learn about Structural & Construction Engineering</a>');
        break;
      case "Thermal & Fluids Engineering":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-thermal-fluids-engineering" target="_blank">Learn about Thermal & Fluids Engineering</a>');
        break;
      case "VLSI Design":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech/vlsi-design" target="_blank">Learn about VLSI Design</a>');
        break;
      case "Thermal Science & Energy Systems":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-thermal-science-energy-systems" target="_blank">Learn about Thermal Science & Energy Systems</a>');
        break;
      case "Wireless Networks & Applications":
        $(".custom-link").append('<a href="https://www.amrita.edu/program/m-tech-wireless-networks-applications" target="_blank">Learn about Wireless Networks & Applications</a>');
        break;
      default:
        $(".custom-link").append('<a href="https://www.amrita.edu/admissions/mtech-2020#specializations" target="_blank">Learn about our programs</a>');
    }
  })

$("#qualification_id").on("change",function() {
  changeddl(this.value);
})

  function changeddl(obj) {
    console.log(obj);
    $("#discipline_id").empty();
    switch(obj){
      case "1":
        $("#discipline_id").append(
          '<option value="11">Aeronautical Engineering</option>'
          +'<option value="9">Aerospace Engineering</option>'
          +'<option value="6">Civil Engineering</option>'
          +'<option value="1">Computer Science and Engineering</option>'
          +'<option value="4">Electrical Engineering</option>'
          +'<option value="3">Electronics and Communication Engineering</option>'
          +'<option value="10">Industrial Engineering</option>'
          +'<option value="2">Information Technology</option>'
          +'<option value="5">Mechanical Engineering</option>'
          +'<option value="7">Petroleum Engineering</option>'
        );
        break;
      case "2":
        $("#discipline_id").append(
          '<option value="16">Biotechnology</option>'
          +'<option value="14">Chemistry</option>'
          +'<option value="12">Computer Science</option>'
          +'<option value="13">Mathematics</option>'
          +'<option value="15">Physics</option>'
        );
        break;
      case "3":
        $("#discipline_id").append('<option value="17">MCA</option>');
        break;
      default:
        $("#discipline_id").append(
          '<option value="11">Aeronautical Engineering</option>'
          +'<option value="9">Aerospace Engineering</option>'
          +'<option value="6">Civil Engineering</option>'
          +'<option value="1">Computer Science and Engineering</option>'
          +'<option value="4">Electrical Engineering</option>'
          +'<option value="3">Electronics and Communication Engineering</option>'
          +'<option value="10">Industrial Engineering</option>'
          +'<option value="2">Information Technology</option>'
          +'<option value="5">Mechanical Engineering</option>'
          +'<option value="7">Petroleum Engineering</option>'
          +'<option value="16">Biotechnology</option>'
          +'<option value="14">Chemistry</option>'
          +'<option value="12">Computer Science</option>'
          +'<option value="13">Mathematics</option>'
          +'<option value="15">Physics</option>'
          +'<option value="17">MCA</option>'
        );
    }
}

function validate(input) {
  //logically decide and set custom validation message
  if (input.value > 999999999 && input.value < 10000000000) {
    // set custom validation message
    input.setCustomValidity('');
  } else {
    // reset the validation message - makes it valid for checkValidity function
    input.setCustomValidity('Enter a valid Mobile / Phone number.');
  }
}

});
