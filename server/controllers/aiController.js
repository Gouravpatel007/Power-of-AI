export const generateQuestion = async (req, res) => {
  const domain = req.body.domain;
  const question = `What are your strengths in ${domain}?`; // Use GPT API if needed
  res.json({ question });
};

export const evaluateAnswer = async (req, res) => {
  const { answer } = req.body;
  const score = answer.length > 50 ? 80 : 40; // Simple logic, replace with AI model
  res.json({ score });
};
