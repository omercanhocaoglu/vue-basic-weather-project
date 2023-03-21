<template>
  <div class="container">
    <div class="row justify-content-center text-light">
      <div class="col-md-8">
        <h1 class=""> The Weather App </h1>
        <input @keyup.enter="getWeather" v-model="data.city" type="text" placeholder="Search a City" class="input p-2 rounded mt-3">
      </div>

      <div class="col-md-6">
        <div v-if="data.weather" class="shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-5 text-dark">
          <div>
            <p class="fs-4 fw-bolder"> City Name </p>
            <p class="fs-4"> {{ data.weather.name }} </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> {{ data.weather.weather[0].main }} </p>
            <p class="fs-4 text-capitalize"> {{ data.weather.weather[0].description }} </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> Temp </p>
            <p> {{ Math.round(data.weather.main.temp) }}° </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> Feels Like </p>
            <p> {{ Math.round(data.weather.main.feels_like) }}° </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> Max Temp </p>
            <p> {{ Math.round(data.weather.main.temp_max) }}° </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> Min Temp </p>
            <p> {{ Math.round(data.weather.main.temp_min) }}° </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> Wind </p>
            <p> {{ Math.round(data.weather.wind.speed) }} </p>
          </div>
          <div>
            <p class="fs-4 fw-bolder"> Humidity </p>
            <p> {{ data.weather.main.humidity }}% </p>
          </div>
        </div>
      </div> <!-- end of col-6 -->
    </div><!-- end of row -->
  </div><!-- end of container -->
</template>

<script>
import { reactive } from 'vue';
import axios from "axios";

export default {
  name: 'home',
  components: {
  },
  
  setup () {
    let data = reactive({
      city: "",
      weather: null,
    });
    const apiUrl = "http://localhost:3000/";
    
    const getWeather = () => {
      axios(`${apiUrl}?q=${data.city}&units=metric`).then(
        response => {
          data.weather = response.data;
          // console.log(data.weather);
          data.city = "";
        }
      )
    };
    
    return {data, getWeather}
  }
}
</script>


