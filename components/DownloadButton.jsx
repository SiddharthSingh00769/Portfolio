import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const DownloadButton = () => {
  return (
    <a href="/resume.pdf" download>
      <Button 
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Download CV</span>
        <FiDownload />
      </Button>
    </a>
  );
};

export default DownloadButton;