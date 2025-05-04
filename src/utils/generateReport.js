import { jsPDF } from 'jspdf';
export const calculateMoodStats = (entries) => {
    const total = entries.length;
  
    // Count moods
    const moodCount = {};
    let totalMoodScore = 0;
    let moodTrendCount = 0;
  
    entries.forEach((entry) => {
      const mood = entry.status;
      moodCount[mood] = (moodCount[mood] || 0) + 1;
  
      // Sum moodTrend scores
      if (Array.isArray(entry.moodTrend)) {
        totalMoodScore += entry.moodTrend.reduce((sum, val) => sum + val, 0);
        moodTrendCount += entry.moodTrend.length;
      }
    });
  
    // Find most common mood
    const mostCommon = Object.keys(moodCount).reduce((a, b) =>
      moodCount[a] > moodCount[b] ? a : b
    );
  
    // Average mood score
    const average = moodTrendCount > 0 ? (totalMoodScore / moodTrendCount).toFixed(2) : 'N/A';
  
    return {
      total,
      mostCommon,
      average,
    };
  };

  export const generateReport = async (entries, chartImage) => {
    const moodStats = calculateMoodStats(entries); 
    const doc = new jsPDF();
  
    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text('Health Summary Report (Mind Balance)', 20, 20);
  
    // Mood stats
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Total Moods: ${moodStats.total}`, 20, 40);
    doc.text(`Most Common: ${moodStats.mostCommon}`, 20, 50);
    doc.text(`Average Mood Score: ${moodStats.average}`, 20, 60);
  
    if (chartImage) {
      const img = new Image();
      img.src = chartImage;
  
      img.onload = () => {
        const pageHeight = doc.internal.pageSize.getHeight();
        const availableHeight = pageHeight - 90 - 30; // top margin + space for footer
        const pdfWidth = 170;
        const aspectRatio = img.height / img.width;
        let pdfHeight = pdfWidth * aspectRatio;
  
        // Cap image height if it exceeds available space
        if (pdfHeight > availableHeight) {
          pdfHeight = availableHeight;
        }
  
        doc.setFontSize(12);
        doc.text('Mood Pie Chart:', 20, 75);
  
        doc.addImage(chartImage, 'PNG', 20, 80, pdfWidth, pdfHeight);
  
        // Footer
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 270);
        doc.save('health-summary-report.pdf');
      };
  
      return;
    }
  
    // If no image, save directly
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 270);
    doc.save('health-summary-report.pdf');
  };
  