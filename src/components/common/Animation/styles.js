import styled from 'styled-components';

export const Circles = styled.div`
.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: -1;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #E5D0D0;
  animation: animate 25s linear infinite;
  bottom: 0px;
  z-index: -1;
}

.circles li:nth-child(1){
  left: 2%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
  animation-duration: 29s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  animation-duration: 50s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 5%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  animation-duration: 22s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 0s;
  animation-duration: 29s;
}

.circles li:nth-child(7){
  left: 15%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 0s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 0s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 15s;
}

.circles li:nth-child(11){
  left: 0%;
  width: 100px;
  height: 100px;
  animation-delay: 0s;
  animation-duration: 20s;
}

.circles li:nth-child(12){
  left: 5%;
  width: 50px;
  height: 50px;
  animation-delay: 0s;
  animation-duration: 11s;
}

.circles li:nth-child(13){
  left: 95%;
  width: 100px;
  height: 100px;
  animation-delay: 0s;
  animation-duration: 20s;
}

.circles li:nth-child(14){
  left: 100%;
  width: 50px;
  height: 50px;
  animation-delay: 0s;
  animation-duration: 11s;
}

.circles li:nth-child(15){
  left: 97%;
  width: 15px;
  height: 15px;
  animation-delay: 0s;
  animation-duration: 35s;
}

@keyframes animate {

  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 25%;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 1;
      border-radius: 50%;
  }

}
`;