import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface PortfolioModalProps {
  onClose: () => void
}

export function PortfolioModal({ onClose }: PortfolioModalProps) {
  const navigate = useNavigate()

  return (
    <div className="relative">
      {/* 헤더 섹션 */}
      <div className="relative h-96 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        {/* 배경 이미지/그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        
        {/* 헤더 콘텐츠 */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              포트폴리오 상세보기
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Framer Motion을 활용한 인터랙티브한 포트폴리오 페이지입니다. 
              부드러운 애니메이션과 현대적인 UI/UX를 경험해보세요.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                바로가기
              </motion.button>
              <motion.button
                className="px-8 py-3 bg-gray-600/50 text-white rounded-lg font-semibold hover:bg-gray-600/70 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                더 보기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 왼쪽: 프로젝트 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">프로젝트 정보</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">개발 기간</h3>
                <p className="text-gray-300">2주 (2024년 1월)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">주요 기능</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• 인터랙티브 애니메이션</li>
                  <li>• 반응형 디자인</li>
                  <li>• 모달 팝업 시스템</li>
                  <li>• 부드러운 페이지 전환</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 미리보기 이미지들 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">미리보기</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={item}
                  className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#f3f5f720] rounded-lg flex items-center justify-center text-white cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                >
                  <span className="text-sm">스크린샷 {item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 하단 액션 버튼들 */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/post-example')}
          >
            전체 페이지 보기
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-gray-600/50 text-white rounded-lg font-semibold hover:bg-gray-600/70 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            닫기
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
