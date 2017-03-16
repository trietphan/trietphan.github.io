<template>
  <div class="projects">
    <div class="col-sm-1 mid">
      <div class="funicon fa fa-code-fork"></div>
    </div>
    <div class="col-sm-11">
      <div class="mid"><h2>Technical Experience</h2></div>
      <div class="technical" v-for="tech in technical">
        <div class="project"><strong>{{ tech.project }}</strong></div>
        <div class="time">{{ tech.time }}</div>
        <ul>
          <li v-for="d in tech.details">{{ d }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        technical: [
        // {
        //   project: 'Design and Evaluate the Iris Recognition Systems',
        //   details: [
        //     'Developed an iris recognition system by using LG2200 2008 data as a gallery and use LG4000 and LG2200 2010 data as probes.',
        //     'Applied the MathLab iris matching code to generate genuinely and imposter distributions, and draw the ROC curves.'
        //   ]
        // }, 
        {
          project: 'Design and Evaluate a Face Recognition System',
          time: 'Fall 2016',
          details: [
            'Utilized the OpenFace pre-trained DNN model to train and use a classification model.',
            'Determined the pose of the face by finding the main landmarks and rotated, scaled, and sheared the images.',
            'Generated the representations from the aligned images.',
            'Trained the classification model and applied it to produce genuinely, imposter distributions, and ROC curves.'
          ]
        }, {
          project: 'Attendance App using iBeacon',
          time: 'Fall 2016',
          details: [
            'Detected users in the range of an iBeacon and automatically signed students in class, build with Swift.',
            'Competed with more than 100 IPRO projects and won the Dean\'s Choice Award.'
          ]
        }, {
          project: 'Mood Analyzer App',
          time: 'Fall 2016',
          details: [
            'Recorded the user\'s voice and translated to text using the Web Speech API.',
            'Utilized the IBM Watson SDK to analyze the emotion and social tones of raw messages.',
            'Adjusted the text and background colors according to user\'s mood to improve user\'s experience.'
          ]
        }, {
          project: 'An Online Grocery Store',
          time: 'Fall 2016',
          details: [
            'Designed an ER-model and translated it into a relational schema implemented as an SQL script.',
            'The backend server, developed in Node.js, served API and talked to school OracleDB instance using the node-oracledb driver..', //using the node-oracledb driver.
            'The front-end client, built with Vue.js, displayed the data and allowed users to manipulate data interactively.'
          ]
        }]
      }
    }
  }
</script>