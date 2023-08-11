select connection_id();

show status;
show variables;

show tables from `information_schema`;
show databases;

select `DEFAULT_COLLECTION_NAME` from `information_schema`.`SCHEMATA` where `SCHEMA_NAME` = 'agrosistec';
SHOW TABLE STATUS FROM `agrosistec`;

