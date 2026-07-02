import React, { useState, useEffect } from 'react';
import { ChevronDown, Plus, Trash2, Edit2, Eye, TrendingUp } from 'lucide-react';

const MatchaContentOS = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [calendarView, setCalendarView] = useState('calendar');
  const [productionView, setProductionView] = useState('board');
  
  // State management for data
  const [contents, setContents] = useState([
    {
      id: 1,
      title: 'Morning Routine',
      status: '✅ Uploaded',
      pilar: 'Lifestyle',
      platform: ['TikTok', 'Instagram'],
      deadline: '2025-01-15',
      uploadDate: '2025-01-14',
      objective: 'Engagement',
      views: 3400,
      likes: 280,
      saves: 210,
      shares: 80,
      follows: 40,
    }
  ]);
  
  const [braindump, setBraindump] = useState([
    'POV Mahasiswa', 'Matcha Myth', 'Customer Story', 'Packing ASMR',
    'Home Cafe', 'Healthy Lifestyle', 'Freelancer Life', 'Weekend Reset'
  ]);
  
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Launching Menu Baru', date: '2025-02-01', status: 'Planning' },
    { id: 2, name: 'Ramadhan', date: '2025-03-01', status: 'Planning' },
    { id: 3, name: 'Workshop', date: '2025-01-25', status: 'In Progress' },
  ]);

  const [productions, setProductions] = useState([
    { id: 1, title: 'Day in My Life', stage: 'Done', priority: 'High' },
    { id: 2, title: 'Matcha Brewing', stage: 'Review', priority: 'High' },
    { id: 3, title: 'Weekend Vlog', stage: 'Editing', priority: 'Medium' },
    { id: 4, title: 'Coffee Talk', stage: 'Shot', priority: 'Medium' },
  ]);

  const [scoreCards, setScoreCards] = useState([
    {
      id: 1,
      title: 'Morning Routine Ep 1',
      hook: 4,
      retention: 5,
      visual: 5,
      story: 4,
      cta: 4,
      views: 3400,
    }
  ]);

  const monthlyGoals = {
    videos: { target: 30, current: 18 },
    followers: { target: 500, current: 320 },
    views: { target: 100000, current: 74500 },
    highPerforming: { target: 10, current: 6 },
  };

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-emerald-900 mb-2">🌿 MATCHA.GO CONTENT HQ</h2>
        <p className="text-emerald-700">Kelola semua content dalam satu dashboard</p>
      </div>

      {/* Goal Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-emerald-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-emerald-600">Upload Target</span>
            <span className="text-2xl">📤</span>
          </div>
          <div className="text-3xl font-bold text-emerald-900">{monthlyGoals.videos.current}</div>
          <div className="text-sm text-gray-500">Dari {monthlyGoals.videos.target} Target</div>
          <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full" style={{width: `${(monthlyGoals.videos.current/monthlyGoals.videos.target)*100}%`}}></div>
          </div>
        </div>

        <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-blue-600">Followers Baru</span>
            <span className="text-2xl">👥</span>
          </div>
          <div className="text-3xl font-bold text-blue-900">{monthlyGoals.followers.current}</div>
          <div className="text-sm text-gray-500">Dari {monthlyGoals.followers.target} Target</div>
          <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full" style={{width: `${(monthlyGoals.followers.current/monthlyGoals.followers.target)*100}%`}}></div>
          </div>
        </div>

        <div className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-purple-600">Total Views</span>
            <span className="text-2xl">👁️</span>
          </div>
          <div className="text-3xl font-bold text-purple-900">{(monthlyGoals.views.current/1000).toFixed(0)}K</div>
          <div className="text-sm text-gray-500">Dari {monthlyGoals.views.target/1000}K Target</div>
          <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full" style={{width: `${(monthlyGoals.views.current/monthlyGoals.views.target)*100}%`}}></div>
          </div>
        </div>

        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-orange-600">Viral Content</span>
            <span className="text-2xl">🔥</span>
          </div>
          <div className="text-3xl font-bold text-orange-900">{monthlyGoals.highPerforming.current}</div>
          <div className="text-sm text-gray-500">Dari {monthlyGoals.highPerforming.target} Target</div>
          <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-orange-500 h-full" style={{width: `${(monthlyGoals.highPerforming.current/monthlyGoals.highPerforming.target)*100}%`}}></div>
          </div>
        </div>
      </div>

      {/* Today's Task & Best Performing */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">📅 Today's Task</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-lg">🎥</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">Shoot Day 03</div>
                <div className="text-xs text-gray-500">10:00 AM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <span className="text-lg">✂️</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">Edit Day 02</div>
                <div className="text-xs text-gray-500">2:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-lg">📝</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">Caption Day 02</div>
                <div className="text-xs text-gray-500">4:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <span className="text-lg">📤</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">Upload</div>
                <div className="text-xs text-gray-500">6:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">🔥 Best Performing</h3>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded">
              <div className="font-semibold text-emerald-900">Day in My Life</div>
              <div className="grid grid-cols-4 gap-2 mt-2 text-xs">
                <div>
                  <div className="text-emerald-600 font-bold">3.4K</div>
                  <div className="text-gray-600">Views</div>
                </div>
                <div>
                  <div className="text-emerald-600 font-bold">280</div>
                  <div className="text-gray-600">Likes</div>
                </div>
                <div>
                  <div className="text-emerald-600 font-bold">210</div>
                  <div className="text-gray-600">Saves</div>
                </div>
                <div>
                  <div className="text-emerald-600 font-bold">80</div>
                  <div className="text-gray-600">Shares</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Ideas & Analytics */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">💡 New Ideas ({braindump.length})</h3>
          <div className="flex flex-wrap gap-2">
            {braindump.slice(0, 6).map((idea, idx) => (
              <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {idea}
              </span>
            ))}
          </div>
          <button onClick={() => setActiveTab('braindump')} className="mt-4 text-emerald-600 font-semibold text-sm hover:underline">
            Lihat semua →
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Monthly Analytics</h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-xl font-bold text-blue-600">{(monthlyGoals.views.current/1000).toFixed(0)}K</div>
              <div className="text-xs text-gray-600">Total Views</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg">
              <div className="text-xl font-bold text-emerald-600">{monthlyGoals.followers.current}</div>
              <div className="text-xs text-gray-600">Followers</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-xl font-bold text-purple-600">12.4%</div>
              <div className="text-xs text-gray-600">Engagement Rate</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <div className="text-xl font-bold text-orange-600">45.2K</div>
              <div className="text-xs text-gray-600">Watch Time (min)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Content Calendar Component
  const ContentCalendar = () => (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <button 
          onClick={() => setCalendarView('calendar')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${calendarView === 'calendar' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          📅 Calendar
        </button>
        <button 
          onClick={() => setCalendarView('table')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${calendarView === 'table' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          📋 Table
        </button>
        <button 
          onClick={() => setCalendarView('board')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${calendarView === 'board' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          🎯 Board
        </button>
      </div>

      {calendarView === 'table' && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Judul</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Platform</th>
                <th className="px-4 py-3 text-left font-semibold">Upload Date</th>
                <th className="px-4 py-3 text-center font-semibold">Views</th>
                <th className="px-4 py-3 text-center font-semibold">Likes</th>
                <th className="px-4 py-3 text-center font-semibold">Saves</th>
              </tr>
            </thead>
            <tbody>
              {contents.map(content => (
                <tr key={content.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{content.title}</td>
                  <td className="px-4 py-3">{content.status}</td>
                  <td className="px-4 py-3">{content.platform.join(', ')}</td>
                  <td className="px-4 py-3">{content.uploadDate}</td>
                  <td className="px-4 py-3 text-center text-blue-600 font-semibold">{content.views}</td>
                  <td className="px-4 py-3 text-center text-pink-600 font-semibold">{content.likes}</td>
                  <td className="px-4 py-3 text-center text-purple-600 font-semibold">{content.saves}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {calendarView === 'board' && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {['🧠 Idea', '✍ Script', '🎥 Shooting', '✂ Editing', '📝 Caption', '📅 Scheduled', '✅ Uploaded', '📈 Evaluated'].map(status => (
              <div key={status} className="min-w-xs bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold mb-3 text-gray-800">{status}</h4>
                <div className="space-y-2">
                  {contents.filter(c => c.status.includes(status.split(' ')[1])).map(content => (
                    <div key={content.id} className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-emerald-500">
                      <div className="font-semibold text-sm">{content.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{content.uploadDate}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {calendarView === 'calendar' && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-center text-gray-500 py-8">
            📅 Calendar view akan menampilkan konten berdasarkan tanggal upload
          </div>
        </div>
      )}
    </div>
  );

  // Brain Dump Component
  const BrainDump = () => {
    const [newIdea, setNewIdea] = useState('');
    return (
      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Content Brain Dump</h3>
          <p className="text-sm text-gray-600 mb-4">Tempat semua ide konten baru. Belum perlu masuk calendar, cukup dump di sini dulu.</p>
          
          <div className="flex gap-2 mb-6">
            <input 
              type="text"
              value={newIdea}
              onChange={(e) => setNewIdea(e.target.value)}
              placeholder="Tambah ide konten baru..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && newIdea.trim()) {
                  setBraindump([...braindump, newIdea]);
                  setNewIdea('');
                }
              }}
            />
            <button 
              onClick={() => {
                if (newIdea.trim()) {
                  setBraindump([...braindump, newIdea]);
                  setNewIdea('');
                }
              }}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {braindump.map((idea, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200 group hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div className="font-semibold text-sm text-amber-900 flex-1">{idea}</div>
                  <button 
                    onClick={() => setBraindump(braindump.filter((_, i) => i !== idx))}
                    className="text-amber-600 hover:text-amber-800 opacity-0 group-hover:opacity-100 transition ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Production Board Component
  const ProductionBoard = () => {
    const stages = ['📌 To Shoot', '🎥 Shot', '✂ Editing', 'Review', 'Done'];
    
    return (
      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎬 Production Board (Kanban)</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {stages.map(stage => (
              <div key={stage} className="min-w-xs">
                <h4 className="font-bold mb-3 text-gray-700">{stage}</h4>
                <div className="space-y-3">
                  {productions.filter(p => p.stage === stage).map(prod => (
                    <div key={prod.id} className="bg-white border-l-4 border-emerald-500 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-move">
                      <div className="font-semibold text-sm text-gray-800">{prod.title}</div>
                      <div className="mt-2 flex gap-2 items-center">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${prod.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {prod.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Analytics Component
  const Analytics = () => (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Analytics Dashboard</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Judul Konten</th>
                <th className="px-4 py-3 text-center font-semibold">Views</th>
                <th className="px-4 py-3 text-center font-semibold">Watch Time</th>
                <th className="px-4 py-3 text-center font-semibold">Share</th>
                <th className="px-4 py-3 text-center font-semibold">Save</th>
                <th className="px-4 py-3 text-center font-semibold">Follow</th>
              </tr>
            </thead>
            <tbody>
              {contents.map(content => (
                <tr key={content.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{content.title}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="font-bold text-blue-600">{content.views}</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="font-bold text-purple-600">2h 14m</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="font-bold text-orange-600">{content.shares}</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="font-bold text-pink-600">{content.saves}</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="font-bold text-emerald-600">{content.follows}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-sm text-emerald-900">
            <strong>Insight:</strong> "Morning Routine" selalu tembus 3K+ views. Strategi: bikin lebih banyak Routine content dengan hook yang berbeda.
          </p>
        </div>
      </div>
    </div>
  );

  // Content Library Component
  const ContentLibrary = () => {
    const folders = ['🌿 Matcha Pour', '🌿 Whisk', '🌿 Milk Pour', '🌿 Packing', '🌿 Laptop', '🌿 Planner', '🌿 Cafe', '🌿 B-roll'];
    
    return (
      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📁 Content Library</h3>
          <p className="text-sm text-gray-600 mb-6">Tempat nyimpan semua footage untuk editing. Drag-drop langsung ke project.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {folders.map((folder, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg border-2 border-dashed border-emerald-300 hover:border-emerald-500 hover:shadow-md transition text-center cursor-pointer group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition">{folder.split(' ')[0]}</div>
                <div className="font-semibold text-sm text-emerald-900">{folder.split(' ')[1]}</div>
                <div className="text-xs text-gray-600 mt-2">12 files</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Campaign Component
  const Campaign = () => {
    const [newCampaign, setNewCampaign] = useState('');
    
    return (
      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Campaign & Launch</h3>
          
          <div className="mb-6 flex gap-2">
            <input 
              type="text"
              value={newCampaign}
              onChange={(e) => setNewCampaign(e.target.value)}
              placeholder="Tambah campaign baru..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
            <button 
              onClick={() => {
                if (newCampaign.trim()) {
                  setCampaigns([...campaigns, {id: campaigns.length + 1, name: newCampaign, date: new Date().toISOString().split('T')[0], status: 'Planning'}]);
                  setNewCampaign('');
                }
              }}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-3">
            {campaigns.map(campaign => (
              <div key={campaign.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">{campaign.name}</h4>
                    <div className="text-sm text-gray-500 mt-1">📅 {campaign.date}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${campaign.status === 'Planning' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {campaign.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // SOP Component
  const SOP = () => {
    const checklist = [
      { id: 1, item: 'Hook kuat', checked: true },
      { id: 2, item: 'Subtitle', checked: true },
      { id: 3, item: 'Cover menarik', checked: true },
      { id: 4, item: 'CTA jelas', checked: false },
      { id: 5, item: 'Hashtag relevan', checked: false },
      { id: 6, item: 'SEO optimized', checked: false },
      { id: 7, item: 'Pin Comment', checked: false },
      { id: 8, item: 'Reply Comment', checked: false },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Checklist Pre-Upload</h3>
          
          <div className="space-y-3">
            {checklist.map(item => (
              <div key={item.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <input 
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {}}
                  className="w-5 h-5 rounded border-gray-300 text-emerald-500 cursor-pointer"
                />
                <label className={`flex-1 font-semibold text-sm ${item.checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                  {item.item}
                </label>
                <span className={item.checked ? 'text-emerald-500' : 'text-gray-300'}>✓</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🧠 Content Formula</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Hook Formula</th>
                  <th className="px-4 py-3 text-center font-semibold">Dipakai</th>
                  <th className="px-4 py-3 text-center font-semibold">Avg Views</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">"Nobody sees this..."</td>
                  <td className="px-4 py-3 text-center">12x</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600">28K</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">"POV:"</td>
                  <td className="px-4 py-3 text-center">8x</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600">35K</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">"Things I wish I knew..."</td>
                  <td className="px-4 py-3 text-center">5x</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600">17K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">⭐ Score Card</h3>
          <div className="space-y-4">
            {scoreCards.map(card => (
              <div key={card.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="font-bold text-gray-800 mb-4">{card.title}</div>
                <div className="grid grid-cols-5 gap-3">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl">{'⭐'.repeat(card.hook)}</div>
                    <div className="text-xs text-gray-600 mt-1">Hook</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl">{'⭐'.repeat(card.retention)}</div>
                    <div className="text-xs text-gray-600 mt-1">Retention</div>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg">
                    <div className="text-2xl">{'⭐'.repeat(card.visual)}</div>
                    <div className="text-xs text-gray-600 mt-1">Visual</div>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-2xl">{'⭐'.repeat(card.story)}</div>
                    <div className="text-xs text-gray-600 mt-1">Story</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <div className="text-2xl">{'⭐'.repeat(card.cta)}</div>
                    <div className="text-xs text-gray-600 mt-1">CTA</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-gray-50 rounded text-center">
                  <span className="font-bold text-emerald-600">{card.views.toLocaleString()} Views</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Main Navigation
  const tabs = [
    { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
    { id: 'calendar', label: '🗓️ Calendar', icon: '🗓️' },
    { id: 'braindump', label: '💡 Brain Dump', icon: '💡' },
    { id: 'production', label: '🎬 Production', icon: '🎬' },
    { id: 'analytics', label: '📈 Analytics', icon: '📈' },
    { id: 'library', label: '📁 Library', icon: '📁' },
    { id: 'campaign', label: '🎯 Campaign', icon: '🎯' },
    { id: 'sop', label: '📝 SOP', icon: '📝' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌿</span>
            <div>
              <h1 className="text-3xl font-bold">MATCHA.GO</h1>
              <p className="text-emerald-100 text-sm">Content OS untuk Social Media</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition text-sm ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'calendar' && <ContentCalendar />}
        {activeTab === 'braindump' && <BrainDump />}
        {activeTab === 'production' && <ProductionBoard />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'library' && <ContentLibrary />}
        {activeTab === 'campaign' && <Campaign />}
        {activeTab === 'sop' && <SOP />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          <p>🌿 Matcha.Go Content OS • Kelola konten sosial media dengan data, bukan feeling</p>
        </div>
      </footer>
    </div>
  );
};

export default MatchaContentOS;
