import React from 'react'

const Profile = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="float-left pt-8 pr-8 font-bold text-5xl">About Casey</h1>
            <div className="pr-8">
                Motivated Software Engineer experienced in designing, developing, testing and documenting web services applications.
                Excels working within a team environment in full life cycle of products as well as individually managing and supporting multiple projects.
                Possesses the ability to switch between multiple environments and projects quickly and efficiently to manage issues, develop, update and maintain code.
            </div>
            <div className="pr-8">
                Specialties:
                PHP, Linux, MySQL, Apache HTTP Server, Node.js, GraphQL, Java, Elasticsearch, Apache Kafka, Amazon AWS, React, Web (JavaScript + jQuery, HTML/CSS),
                Bash Shell, Selenium Web Driver, Jenkins, Docker
            </div>
        </div>
    )
}

export default Profile