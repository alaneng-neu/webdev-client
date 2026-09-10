export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/sls-4215_-_sls_artemis_i_infographic.jpg"
        width="200px"
        alt="Artemis I Moon Rocket"
      />
      <br />
      <img
        id="wd-your-image"
        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/NU_RGB_seal_R.png"
        width="200px"
        alt="Northeastern University Logo"
      />
    </div>
  );
}
