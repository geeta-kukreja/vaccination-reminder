
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /vaccination-reminder

# Copy the requirements file into the container
COPY requirements.txt /vaccination-reminder/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose port 8082
EXPOSE 8082

# Command to run the application
CMD ["python", "run.py"]
