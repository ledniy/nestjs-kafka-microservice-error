1. Run kafka `docker run -p 9092:9092 -d bashj79/kafka-kraft`
2. Create topic and message by `node produce.mjs`
3. Run regular kafkajs consumer `node kafka.mjs` to see desired behaviour, then kill it and run it again to see that message is still available and we getting the same error again.
4. Run nest app `nest start` kill it after the error, run it again and see that there's no message as it was committed no matter the error
