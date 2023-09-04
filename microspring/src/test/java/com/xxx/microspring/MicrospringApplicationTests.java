package com.xxx.microspring;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest
@Testcontainers
class MicrospringApplicationTests {
    //usar testContainers librey

    @Container
    static MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:6.0.9");

    static void setProperties(DynamicPropertyRegistry dymDynamicPropertyRegistry){
        dymDynamicPropertyRegistry.add("spring.data.mongo.uri", mongoDBContainer::getReplicaSetUrl);
    }

    @Test
    void contextLoads() {
    }


}
