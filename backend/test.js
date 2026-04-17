// Test script for Hedaya Backend
const axios = require('axios');

async function testBackend() {
  try {
    console.log('Testing Hedaya Backend...\n');

    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await axios.get('http://localhost:5000/api/health');
    console.log('✅ Health check passed:', healthResponse.data);

    // Test AI endpoint
    console.log('\n2. Testing AI endpoint...');
    const aiResponse = await axios.post('http://localhost:5000/api/ask-ai', {
      question: 'ما هو أفضل الذكر؟'
    });
    console.log('✅ AI response:', aiResponse.data);

    console.log('\n🎉 All tests passed! Backend is working correctly.');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

testBackend();