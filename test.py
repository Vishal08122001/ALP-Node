import schedule
import time
import logging
import psycopg2
from psycopg2 import Error

# Configure logging
logging.basicConfig(filename='job_log.txt', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Function to insert log entry into PostgreSQL
def insert_log(state, job, date):
    try:
        connection = psycopg2.connect(user="postgres",
                                      password="Vishal@9818",
                                      host="127.0.0.1",
                                      port="5432",
                                      database="postgres")

        cursor = connection.cursor()
        postgres_insert_query = """ INSERT INTO job_logs (state, job, log_date) VALUES (%s,%s,%s)"""
        record_to_insert = (state, job, date)
        cursor.execute(postgres_insert_query, record_to_insert)

        connection.commit()
        count = cursor.rowcount
        logging.info(f"{count} Record inserted successfully into job_logs table")

    except (Exception, Error) as error:
        logging.error(f"Failed to insert record into job_logs table: {error}")

    finally:
        if connection:
            cursor.close()
            connection.close()
            logging.info("PostgreSQL connection is closed")

# Scheduled task with logging and database insertion
def scheduled_task():
    try:
        # Your task logic here
        # Simulating task completion
        time.sleep(2)
        logging.info("Scheduled task executed successfully")

        # Inserting log entry into PostgreSQL
        insert_log("created", "scheduled_task", time.strftime('%Y-%m-%d %H:%M:%S'))

    except Exception as e:
        logging.error(f"Error in scheduled_task: {e}")

# Schedule the task to run every minute
schedule.every(1).minute.do(scheduled_task)

# Main loop to run scheduled tasks
while True:
    schedule.run_pending()
    time.sleep(1)
