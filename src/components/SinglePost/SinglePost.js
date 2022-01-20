import react from "react";
import "./SinglePost.css";
function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-container">
        <img
          className="single-post-img"
          src="https://img.thuthuatphanmem.vn/uploads/2018/10/08/anh-phong-canh-tim-dep_093817887.jpg"
          alt=""
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit">
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Locpham</b>
          </span>
          <span className="single-post-date">1 hours ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          interdum sit amet lacus ac malesuada. Proin tincidunt pulvinar dui
          vulputate semper. Aliquam aliquet venenatis erat, ac posuere tellus
          sollicitudin ut. Praesent dignissim diam interdum, pulvinar est quis,
          dictum lacus. Cras volutpat vehicula eros, a vulputate dui mattis
          vitae. Etiam quis elit eget orci mattis dapibus sed at leo. Curabitur
          elit turpis, tincidunt vel mi sed, fringilla blandit nisl. Donec id
          blandit sapien. In iaculis convallis justo ut hendrerit. Aliquam vitae
          magna ac tellus faucibus scelerisque sit amet cursus eros.
        </p>
      </div>
    </div>
  );
}
export default SinglePost;
