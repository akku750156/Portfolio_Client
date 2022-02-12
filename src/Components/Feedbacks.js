import axios from "axios";
import React, { useState, useEffect } from "react";
import FeedModal from "../Components/FeedModal";
import Footer from "../Components/Footer";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

function Feedbacks() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .get("https://server-portfolio750156.herokuapp.com/getfeeds")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        alert("Error");
      });
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleSubmit = (e) => {
    setIsModalVisible(false);
    setContent("");
    console.log(content);
    axios
      .post("https://server-portfolio750156.herokuapp.com/feed", {
        content: content,
      })
      .then((res) => {
        res
          .status(200)
          .json({ message: "Feedback added to database successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setContent("");
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Modal
        title="Send Your Valuable Feedback"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText="Submit"
      >
        <input
          type="text"
          name="content"
          value={content}
          placeholder="Feedback"
          onChange={handleChange}
        />
      </Modal>
      <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-primary min-h-screen">
        <div className="flex flex-col items-center">
          <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-bgheading relative">
            &#xa0;&#x3c;FEEDBACKS&#x2f;&#x3e;&#xa0;
          </div>
          <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-6 lg:mt-10 bg-transparent md:text-7xl lg:text-9xl font-bold">
            SUGGESTIONS
          </div>
          <PlusCircleOutlined
            style={{
              color: "#FCD34D",
              fontSize: "30px",
              cursor: "pointer",
            }}
            className="pointer absolute top-20 right-24 sm:right-32 md:right-40 lg:right-48 lg:top-40 "
            onClick={showModal}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center my-16 sm:my-20 md:my-24 lg:my-28 ">
          {data.map((element) => (
            <FeedModal content={element.content} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Feedbacks;
