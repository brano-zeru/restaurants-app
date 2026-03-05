FROM liquibase/liquibase:latest

USER root

RUN curl -L https://repo1.maven.org/maven2/org/postgresql/postgresql/42.7.2/postgresql-42.7.2.jar -o /liquibase/lib/postgresql-42.7.2.jar

USER liquibase