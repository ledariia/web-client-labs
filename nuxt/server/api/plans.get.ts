export default defineEventHandler(() => {
  return {
    starter: {
      id: 'starter',
      name: 'Starter - Annual',
      price: 83.25,
      annualPrice: 999,
      savings: 189,
      colorClass: 'bg-green-500',
      features: [
        { text: 'Primary user only', subtext: '(extra team members for $35/month)' },
        { text: 'Save unlimited properties' },
        { text: '10,000 exports', subtext: '(additional exports at $0.02 each)' },
        { text: '500 free skip traces', subtext: '(additional skip tracing at $0.08 each)' },
        { text: 'Imports $0.01' }
      ]
    },
    team: {
      id: 'team',
      name: 'Team - Annual',
      price: 207.50,
      annualPrice: 2490,
      savings: 498,
      colorClass: 'bg-cyan-500',
      features: [
        { text: 'Primary user + 2 free team members', subtext: '(extra team members for $25/month)' },
        { text: 'Save unlimited properties' },
        { text: '50,000 exports', subtext: '(additional exports at $0.01 each)' },
        { text: '1,000 free skip traces', subtext: '(additional skip tracing at $0.08 each)' },
        { text: 'Imports $0.01' }
      ]
    },
    business: {
      id: 'business',
      name: 'Business - Annual',
      price: 457.50,
      annualPrice: 5490,
      savings: 1098,
      colorClass: 'bg-green-500',
      features: [
        { text: 'Primary user + 6 free team members', subtext: '(extra team members for $20/month)' },
        { text: 'Save unlimited properties' },
        { text: '100,000 exports', subtext: '(additional exports at $0.01 each)' },
        { text: '2,000 free skip traces', subtext: '(additional skip tracing at $0.08 each)' },
        { text: 'Imports $0.01' }
      ]
    }
  }
})
