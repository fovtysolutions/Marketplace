-- candidate users
CREATE TABLE IF NOT EXISTS candidate_users(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    username VARCHAR(120) NOT NULL,
    lastname VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    mobile VARCHAR(15) DEFAULT NULL,
    password VARCHAR(120) NOT NULL,
    uploaded VARCHAR(255) DEFAULT NULL,
    prilanguage VARCHAR(120) DEFAULT NULL,
    seclanguage VARCHAR(120) DEFAULT NULL,
    profileimg VARCHAR(255) DEFAULT 'profile.jpg',
    dob VARCHAR(120) DEFAULT NULL,
    address VARCHAR(255) DEFAULT NULL,
    landmark VARCHAR(255) DEFAULT NULL,
    country VARCHAR(255) DEFAULT NULL,
    state VARCHAR(255) DEFAULT NULL,
    city VARCHAR(255) DEFAULT NULL,
    zipcode VARCHAR(255) DEFAULT NULL,
    description TEXT DEFAULT NULL
);

-- empolyer users
CREATE TABLE IF NOT EXISTS employer_users(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    username VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    mobile VARCHAR(15) DEFAULT NULL,
    weburl VARCHAR(15) DEFAULT NULL,
    password VARCHAR(120) NOT NULL,
    profile VARCHAR(255) DEFAULT 'profile.jpg'
);

-- OTP
CREATE TABLE IF NOT EXISTS otp(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    otp VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    frontweburl VARCHAR(255) NOT NULL,
    recovery_code VARCHAR(120) NOT NULL,
    user_type ENUM("candidate", "employer")
);

--Blogs
CREATE TABLE `blogs` (
  id INT(10) AUTO_INCREMENT PRIMARY KEY,
  `title` text NOT NULL,
  `subtitle` text NOT NULL,
  `cover` VARCHAR(255) DEFAULT 'profile.jpg',
  `short_content` text NOT NULL,
  `content` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `extra_field` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Select-Option
CREATE TABLE `select_option` (
  `id` INT(10) AUTO_INCREMENT PRIMARY KEY,
  `code` INT(10) NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- users details phase 2
CREATE TABLE IF NOT EXISTS candidate_details_phase2 (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    edu_level VARCHAR(120) DEFAULT NULL,
    degree VARCHAR(120) DEFAULT NULL,
    branch VARCHAR(120) DEFAULT NULL,
    institution VARCHAR(255) DEFAULT NULL,
    period_from VARCHAR(120) DEFAULT NULL,
    period_to VARCHAR(120) DEFAULT NULL,
    cgpa_sgpa VARCHAR(255) DEFAULT NULL,
    mejorproject JSON DEFAULT NULL,
    certification JSON DEFAULT NULL
);

-- users details phase 3
CREATE TABLE IF NOT EXISTS candidate_details_phase3 (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    job_title VARCHAR(255) DEFAULT NULL,
    department VARCHAR(255) DEFAULT NULL,
    company VARCHAR(255) DEFAULT NULL,
    period_from VARCHAR(120) NOT NULL,
    period_to VARCHAR(120) NOT NULL,
    rol_responsibility TEXT DEFAULT NULL,
    location VARCHAR(255) DEFAULT NULL,
    skills JSON DEFAULT NULL
);

-- users details phase 4
CREATE TABLE IF NOT EXISTS candidate_details_phase4 (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    linkedin TEXT DEFAULT NULL,
    github TEXT DEFAULT NULL,
    youtube TEXT DEFAULT NULL,
    blog_portf TEXT DEFAULT NULL,
    other TEXT DEFAULT NULL
);

-- users details phase 5
CREATE TABLE IF NOT EXISTS candidate_details_phase5 (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(120) NOT NULL,
    department VARCHAR(255) DEFAULT NULL,
    location JSON DEFAULT NULL,
    work_mode VARCHAR(255) DEFAULT NULL,
    shift_from VARCHAR(255) DEFAULT NULL,
    shift_to VARCHAR(255) DEFAULT NULL,
    notice_period VARCHAR(255) DEFAULT NULL,
    current_salary INT(25) NOT NULL,
    expected_salary INT(25) NOT NULL,
    experience INT(25) NOT NULL,
    salary_mode VARCHAR(255) DEFAULT NULL,
    acceptation ENUM("nonAccept", "Accept") DEFAULT "nonAccept"
);

-- product categorys
CREATE TABLE IF NOT EXISTS product_categorys(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    status ENUM("not_active", "active") DEFAULT "not_active"
);

-- products
CREATE TABLE IF NOT EXISTS products(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    price DOUBLE(8,2) NOT NULL,
    sale_price DOUBLE(8,2) NOT NULL,
    qty DOUBLE(8,2) NOT NULL,
    details TEXT DEFAULT NULL,
    image VARCHAR(120) NOT NULL
);

-- product_ratings
CREATE TABLE IF NOT EXISTS product_ratings(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    user_id INT(10) NOT NULL,
    product_id INT(10) NOT NULL,
    rate ENUM ('1','2','3','4','5') DEFAULT '1',
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- product_reviews
CREATE TABLE IF NOT EXISTS product_reviews(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    user_id INT(10) NOT NULL,
    product_id INT(10) NOT NULL,
    review VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- product_carts
CREATE TABLE IF NOT EXISTS product_carts(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    product_id INT(10) NOT NULL,
    user_id INT(10) NOT NULL,
    qty DOUBLE(8,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- payment_request_details
CREATE TABLE IF NOT EXISTS payment_request_details(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(120) NOT NULL,
    amount DOUBLE(8,2) NOT NULL,
    buyer_name VARCHAR(120) NOT NULL,
    purpose VARCHAR(120) NOT NULL,
    payment_request_status VARCHAR(120) NOT NULL,
    payment_id VARCHAR(120) NOT NULL,
    payment_status VARCHAR(120) NOT NULL
);

-- order_payments
CREATE TABLE IF NOT EXISTS order_payments(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    payment_request_detals_id INT(10) NOT NULL,
    FOREIGN KEY (payment_request_detals_id) REFERENCES payment_request_details(id)
);

-- products_orders
CREATE TABLE IF NOT EXISTS products_orders(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    payment_id INT(10) NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES order_payments(id)
);

-- products_order_details
CREATE TABLE IF NOT EXISTS products_order_details(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    order_id INT(10) NOT NULL,
    payment_id INT(10) NOT NULL,
    user_id INT(10) NOT NULL,
    qty DOUBLE(8,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES products_orders(id)
);



INSERT INTO `select_option` ( `code`, `type`, `name`) VALUES
(0, 'Degree', 'Bachelors degree'),
(0,'Degree', 'Masters degree'),
(0,'Degree', 'Doctorate or Ph.D.'),
(0,'Bachelors degree', 'Associate of Arts (AA)'),
(0,'Bachelors degree', 'Associate of Science (AS)'),
(0,'Bachelors degree', 'Bachelor of Arts (BA)'),
(0,'Masters degree', 'Master of Arts (MA)'),
(0,'Masters degree', 'Master of Science (MS)'),
(0,'Doctorate or Ph.D.', 'Doctor of Philosophy (Ph.D.)'),
(0,'Doctorate or Ph.D.', 'Doctor of Education (Ed.D.) '),
(0,'Doctorate or Ph.D.', 'Doctor of Science (Sc.D.)'),
(0,'Bachelors degree', 'Bachelor of Science (BS)'),
(0,'Bachelors degree', 'Bachelor of Business Administration (BBA)'),
(0,'Bachelors degree', 'Bachelor of Commerce (BCom)'),
(0,'Bachelors degree', 'Bachelor of Technology (B.Tech)'),
(0,'Bachelors degree', 'BCA (Bachelor of Computer Applications)'),
(0,'Masters degree', 'Master of Business Administration (MBA)'),
(0,'Masters degree', 'MCom (Master of Commerce)'),
(0,'Masters degree', 'MTech (Master of Technology)'),
(0,'Masters degree', 'MCA (Master of Computer Applications)'),
(0,'Associate of Arts (AA)', 'English'),
(0,'Associate of Arts (AA)', 'History'),
(0,'Associate of Arts (AA)', 'Psychology'),
(0,'Associate of Arts (AA)', 'Sociology'),
(0,'Associate of Science (AS)', 'Biology'),
(0,'Associate of Science (AS)', 'Chemistry'),
(0,'Associate of Science (AS)', 'Physics'),
(0,'Associate of Science (AS)', 'Computer Science'),
(0,'Bachelor of Arts (BA)', 'English'),
(0,'Bachelor of Arts (BA)', 'History'),
(0,'Bachelor of Arts (BA)', 'Psychology'),
(0,'Bachelor of Arts (BA)', 'Sociology'),
(0,'Bachelor of Science (BS)', 'Biology'),
(0,'Bachelor of Science (BS)', 'Chemistry'),
(0,'Bachelor of Science (BS)', 'Physics'),
(0,'Bachelor of Science (BS)', 'Computer Science'),
(0,'Bachelor of Business Administration (BBA)', 'Marketing '),
(0,'Bachelor of Business Administration (BBA)', 'Finance'),
(0,'Bachelor of Business Administration (BBA)', 'Human Resources'),
(0,'Bachelor of Business Administration (BBA)', 'Entrepreneurship'),
(0,'Bachelor of Commerce (BCom)', 'Accounting '),
(0,'Bachelor of Commerce (BCom)', 'Finance'),
(0,'Bachelor of Commerce (BCom)', 'Marketing'),
(0,'Bachelor of Commerce (BCom)', 'Economics'),
(0,'Bachelor of Technology (B.Tech)', 'Computer Science and Engineering'),
(0,'Bachelor of Technology (B.Tech)', 'Electrical Engineering'),
(0,'Bachelor of Technology (B.Tech)', 'Mechanical Engineering'),
(0,'Bachelor of Technology (B.Tech)', 'Civil Engineering'),
(0,'BCA (Bachelor of Computer Applications)', 'Software Development'),
(0,'BCA (Bachelor of Computer Applications)', 'Database Management'),
(0,'BCA (Bachelor of Computer Applications)', 'Networking'),
(0,'BCA (Bachelor of Computer Applications)', 'Web Technologies'),
(0,'Master of Arts (MA)', 'Literature'),
(0,'Master of Arts (MA)', 'History'),
(0,'Master of Arts (MA)', 'Psychology'),
(0,'Master of Arts (MA)', 'Sociology'),
(0,'Master of Science (MS)', 'Biology'),
(0,'Master of Science (MS)', 'Chemistry'),
(0,'Master of Science (MS)', 'Physics'),
(0,'Master of Science (MS)', 'Computer Science'),
(0,'Master of Business Administration (MBA)', 'International Business '),
(0,'Master of Business Administration (MBA)', 'Finance'),
(0,'Master of Business Administration (MBA)', 'Operations Management'),
(0,'Master of Business Administration (MBA)', 'Marketing'),
(0,'MCom (Master of Commerce)', 'Accounting'),
(0,'MCom (Master of Commerce)', 'Finance'),
(0,'MCom (Master of Commerce)', 'Marketing'),
(0,'MCom (Master of Commerce)', 'Business Analytics'),
(0,'MTech (Master of Technology)', 'Information Technology'),
(0,'MTech (Master of Technology)', 'Structural Engineering '),
(0,'MTech (Master of Technology)', 'Power Systems'),
(0,'MTech (Master of Technology)', 'Environmental Engineering'),
(0,'MCA (Master of Computer Applications)', 'Software Engineering'),
(0,'MCA (Master of Computer Applications)', 'Data Science'),
(0,'MCA (Master of Computer Applications)', 'Artificial Intelligence'),
(0,'MCA (Master of Computer Applications)', 'Mobile Application Development'),
(0,'Doctor of Philosophy (Ph.D.)', 'Humanities and Social Sciences'),
(0,'Doctor of Philosophy (Ph.D.)', 'Natural Sciences'),
(0,'Doctor of Philosophy (Ph.D.)', 'Engineering'),
(0,'Doctor of Philosophy (Ph.D.)', 'Health Sciences'),
(0,'Doctor of Philosophy (Ph.D.)', 'Business and Management'),
(0,'Doctor of Philosophy (Ph.D.)', 'Information Technology'),
(0,'Doctor of Education (Ed.D.) ', 'Educational Leadership'),
(0,'Doctor of Education (Ed.D.) ', 'Counseling and Psychology'),
(0,'Doctor of Education (Ed.D.) ', 'Special Education'),
(0,'Doctor of Education (Ed.D.) ', 'Curriculum and Instruction'),
(0,'Doctor of Science (Sc.D.)', 'Natural Sciences'),
(0,'Doctor of Science (Sc.D.)', 'Health Sciences'),
(0,'Doctor of Science (Sc.D.)', 'Engineering'),
(0,'Doctor of Science (Sc.D.)', 'Mathematics and Statistics'),
(0,'Degree', 'Diploma'),
(0,'Masters degree', 'Others'),
(0,'Bachelors degree', 'Others'),
(0,'Doctorate or Ph.D.', 'Others'),
(0,'Phase_1_language', 'Bengali'),
(0,'Phase_1_language', 'Marathi'),
(0,'Diploma', 'Mechanical'),
(0,'Diploma', 'Electrical');

INSERT INTO `select_option` ( `code`, `type`, `name`) VALUES
(0, 'department', 'Information Technology (IT)'),
(0, 'department', 'Finance'),
(0, 'department', 'Human Resources (HR)'),
(0, 'department', 'Marketing'),
(0, 'department', 'Sales'),
(0, 'department', 'Operations'),
(0, 'department', 'Customer Service'),
(0, 'department', 'Research and Development (R&D)'),
(0, 'department', 'Healthcare'),
(0, 'department', 'Education'),
(0, 'department', 'Legal'),
(0, 'department', 'Engineering'),
(0, 'department', 'Manufacturing'),
(0, 'department', 'Government and Public Service'),
(0, 'department', 'Nonprofit and Social Services'),
(0, 'department', 'Media and Communication'),
(0,'department', 'Research and Analysis'),
(0,'department', 'Retail');

INSERT INTO `select_option` ( `code`, `type`, `name`) VALUES
(0, 'work_mode', 'Hybrid'),
(0,'work_mode', 'Remote'),
(0,'work_mode', 'Onsite');

INSERT INTO `select_option` ( `code`, `type`, `name`) VALUES
(0, 'notice_period', '15 Days'),
(0,'notice_period', '15-30 Days'),
(0,'notice_period', '30-60 Days'),
(0,'notice_period', 'Above 60 Days');


INSERT INTO `blogs` ( `title`, `subtitle`, `cover`, `short_content`, `content`, `status`, `extra_field`, `created_at`, `updated_at`) VALUES
('Marketing', '5 tips to be prepared for 2024 digital marketing trends', 'profile.jpg', 'Briefly introduce the field of UI/UX design and its importance in creating engaging digital experiences.', 'Briefly introduce the field of UI/UX design and its importance in creating engaging digital experiences.', '', '', '', ''),
('Development', 'What to expect on Your first technical interview?', 'profile.jpg', 'Briefly introduce the field of UI/UX design and its importance in creating engaging digital experiences.', 'Briefly introduce the field of UI/UX design and its importance in creating engaging digital experiences.', '', '', '', ''),
('Design', 'How to start your career as a UI/UX designer', 'profile.jpg', 'Briefly introduce the field of UI/UX design and its importance in creating engaging digital experiences.', 'Briefly introduce the field of UI/UX design and its importance in creating engaging digital experiences.', '', '', '', '');