import React from 'react'

function Map() {
    const jobsData = [
        {
          id: 1,
          title:
            "At hiring tech you get tremendous opportunities to elevate your career. Especially through their training program.",
          location: "Indore",
          tags: ["Indore", "Indore", "Java Spring boot ", "Python"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
        },
        {
          id: 2,
          title: "Frontend Developer",
          location: "Remote",
          tags: ["React", "HTML", "CSS"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
        },
        {
          id: 3,
          title: "Backend Developer",
          location: "Pune",
          tags: ["Node.js", "MongoDB"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
        },
        {
          id: 4,
          title: "Seo Specialist",
          location: "Bhopal",
          tags: ["Google ads", "Seo Tool"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
        },
      ];

  return (
    <div>
        {jobsData.map( (data) => (
                <ul key={data.id}>
                    <li>{data.title}</li>
                </ul>
            
        ) )}


    </div>
  )
}

export default Map