import { execSync } from 'child_process';

export default function handler(req, res) {
  try {
    // Execute the PHP code using execSync
    const output = execSync(`php ${__dirname}/../php/user_signin.php`);
    
    // Process the output as needed
    // ...

    // Send the response
    res.status(200).json({ message: 'PHP code executed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while executing PHP code' });
  }
}